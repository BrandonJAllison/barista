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

    

    const [customerData, setCustomerData] = useState()
    // let name = customerData.business_name

    const handleSubmit = async(e)=>{ 
        e.preventDefault();
        let db = firebase.firestore();
        db.collection("clients").doc().set({
          business_name: form.business_name,
          business_phone: form.business_phone
      })
      .then(function() {
          console.log("Document successfully written!");
          alert("Document successfully written!")
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    }

    useEffect(() => {
     
        let db = firebase.firestore();
        db.collection("clients")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            console.log(doc.data());
           
            });  // retrieve all documents from "clients"
          });
          
      }, []);
      

    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Form className="form" style={{background:'rgba(245,245,245,.9)', padding: '20px 30px 40px 30px', borderRadius: '8px', fontWeight:'bold', width:'80%', marginTop:'25px'}} onSubmit={handleSubmit}>
                <h2>Add New Customer</h2>
                <Form.Group controlId="formBasicBName">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control type="text" placeholder="Business Name" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, business_name: e.target.value})} />
                </Form.Group>
                <Form.Group controlId="formBasicBName">
                    <Form.Label>Business Phone</Form.Label>
                    <Form.Control type="text" placeholder="Business Phone" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, business_phone: e.target.value})} />
                </Form.Group>
                <Button className="button" type="submit">Submit</Button>
            </Form>
           
           
             {/* {customerData && customerData.map(name => (
            <li>
            {name}
            </li>
      ))} */}
   
        </div>

    )}

export default Customer_Management