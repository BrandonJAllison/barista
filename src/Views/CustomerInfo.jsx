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
        <div style={{padding:"50px", display:"flex", justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <img src={clients.logo_url} style={{height:"300px", width:"auto"}}/>
        <p>{clients.business_name}</p>
        <p>Contact Person: {clients.contact_name}</p>
        <p>Contact Phone: {clients.business_phone}</p>
        </div>
        
    </div>
)
}

export default CustomerInfo 