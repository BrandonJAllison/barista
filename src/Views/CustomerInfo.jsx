import {useState, useEffect, useParams} from 'react'
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";



const CustomerInfo = (props) => {

     console.log('surprise motherfucker', props.match.params.id)
     let documentId = props.match.params.id

     const [clients, setClients] = useState([]);


     useEffect(() => {
        let db = firebase.firestore();
        db.collection("clients")
            .doc(documentId)
            .get()
            .then(doc => {
            const data = doc.data();
            setClients(data)
            console.log('data',data); 
            });
      },[]);



return(

    <div>
        <p>{clients.business_name}</p>
    </div>
)
}

export default CustomerInfo 