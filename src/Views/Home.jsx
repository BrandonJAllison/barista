import {useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const Home = () => {

    
  useEffect(() => {
    let db = firebase.firestore();
    db.collection("users")
        .doc('Ne0g3NAIpLb10nWWodpXmkgVefY2')
        .get()
        .then(doc => {
        const data = doc.data();
        console.log('data',data); 
        });
  },[]);



    return(
        <div>
     
        </div>
    )
}

export default withRouter(Home) 