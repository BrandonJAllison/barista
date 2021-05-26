import {useState, useEffect} from 'react'
import { Button, Form, Image } from 'react-bootstrap';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


const Customer_Management = () => {


    const [form,setForm] = useState({
       business_name:''
    });

    const [customerData, setCustomerData] = useState()
    // let name = customerData.business_name

    const handleSubmit = async(e)=>{ 
        e.preventDefault();
        let db = firebase.firestore();
        db.collection("clients").doc().set({
          business_name: form.business_name
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    }

    useEffect(() => {
      
      },[]);
      
      

    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Form className="form" style={{background:'rgba(245,245,245,.9)', padding: '20px 30px 40px 30px', borderRadius: '8px', fontWeight:'bold', width:'80%', marginTop:'25px'}} onSubmit={handleSubmit}>
                <h2>Add New Customer</h2>
                <Form.Group controlId="formBasicBName">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, business_name: e.target.value})} />
                </Form.Group>
                <Button className="button" type="submit">Submit</Button>
            </Form>
           
           
             {/* {customerData && customerData.forEach(name => (
            <li>
            {name}
            </li>
      ))} */}
   
        </div>

    )}

export default Customer_Management