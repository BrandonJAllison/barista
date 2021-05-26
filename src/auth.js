
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

import {auth} from './firebase'


  
export const register = async({fName, lName, position, email, password})=>{
    const resp = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);
      console.log(resp.user.uid)
      let db = firebase.firestore();
      db.collection("users").doc(resp.user.uid).set({
        id: resp.user.uid,
        first_name:fName,
        last_name:lName,
        position: position,
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
      
    return resp.user;
}
  
export const login = async({email, password})=>{
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password);
      
    return res.user;
}