import {useState, useEffect} from 'react'
import { Button, Form, Image } from 'react-bootstrap';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";



const Customer_Management = () => {


    const [form,setForm] = useState({
       business_name:'',
       business_phone:''
    });

    const [clients, setClients] = useState([]);

    useEffect(() => {
        console.log('useEffect Hook!!!');
        let db = firebase.firestore();
        db.collection('clients').orderBy('business_name', 'asc').onSnapshot(snapshot => {
          console.log('Firebase Snap!');
          setClients(snapshot.docs.map(doc => {
            return {
              key: doc.id,
              phone : doc.data().business_phone,
              name: doc.data().business_name,
              logo: doc.data().logo_url
            }
          }))
        })
        console.log(clients)
    
      }, []);



    const handleSubmit = async(e)=>{ 
        e.preventDefault();
        let db = firebase.firestore();
        db.collection("clients").doc().set({
          business_name: form.business_name,
          business_phone: form.business_phone,
          logo_url: form.business_logo
      })
      .then(function() {
        document.form.reset(); 
          console.log("Document successfully written!");
          alert("Document successfully written!")
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    }

   

    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Form className="form" name="form" style={{background:'rgba(245,245,245,.9)', padding: '20px 30px 40px 30px', borderRadius: '8px', fontWeight:'bold', width:'80%', marginTop:'25px'}} onSubmit={handleSubmit}>
                <h2>Add New Customer</h2>
                <Form.Group controlId="formBasicBName">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control type="text" placeholder="Business Name" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, business_name: e.target.value})} />
                </Form.Group>
                <Form.Group controlId="formBasicBPhone">
                    <Form.Label>Business Phone</Form.Label>
                    <Form.Control type="text" placeholder="Business Phone" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, business_phone: e.target.value})} />
                </Form.Group>
                <Form.Group controlId="formBasicLogo">
                    <Form.Label>Logo URL</Form.Label>
                    <Form.Control type="text" placeholder="Logo Url" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, business_logo: e.target.value})} />
                </Form.Group>
                <Button className="button" type="submit">Submit</Button>
            </Form>

            <div style={{marginTop:'50px', padding:'10px', width:'80%',  display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
        {
          clients.map(client => (
             
              <div className="cards" style={{borderRadius:'5px', width:'250px', height:'300px', margin:'20px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'15px'}}>
              <Image src={client.logo} width="100" height="100"/>
              <p style={{fontWeight:'bold', fontSize:'10px'}}>{client.name}</p>
              <p style={{fontSize:'11px'}}>{client.phone} </p>
              </div>
          
              
          ))
        }
      </div>
           
           

        </div>

    )}

export default Customer_Management