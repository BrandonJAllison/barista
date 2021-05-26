
import firebase from 'firebase/app';


  const firebaseConfig = {
    apiKey: "AIzaSyCnKXlE2tY-qK8xWI9Yjm43vtWQc9ZpqPk",
    authDomain: "barista-b258e.firebaseapp.com",
    projectId: "barista-b258e",
    storageBucket: "barista-b258e.appspot.com",
    messagingSenderId: "258510662904",
    appId: "1:258510662904:web:11864908fc22ab35605f0d",
    measurementId: "G-V8XNH1L5HP"
  };
  
firebase.initializeApp(firebaseConfig); 
export const auth = firebase.auth();