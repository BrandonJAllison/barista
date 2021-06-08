
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
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
        email: email
    })
    .then(function() {
        console.log("Document successfully written!");
        
          store.addNotification({
            title: 'User Registration',
            message: 'User Added Successfuly',
            type: 'default',                         // 'default', 'success', 'info', 'warning'
            container: 'top-left',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
              duration: 3000
            }
          })
        
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