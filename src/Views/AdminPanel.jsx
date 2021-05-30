import React, {useState} from 'react'
import {register} from '../auth'
import { Button, Form, Image } from 'react-bootstrap';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import '../App.css'

const Admin_Panel = () => {

    const [form,setForm] = useState({
        fName:'',
        lName:'',
        position:'',
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await register(form);
  
    }
    return(
        <div style={{display:'flex', justifyContent:'center', paddingTop:"30px"}}>
        
            <Form className="form1" style={{background:'rgba(245,245,245,.6)', padding: '20px 30px 40px 30px', borderRadius: '8px', fontWeight:'bold', width:'50%'}} onSubmit={handleSubmit}>
                <h5>Add New User</h5>
                <Form.Group controlId="formBasicFName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, fName: e.target.value})} />
                </Form.Group>
                <Form.Group controlId="formBasicLName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, lName: e.target.value})} />
                </Form.Group>
                <Form.Group controlId="formBasicLName">
                    <Form.Label>Position</Form.Label>
                    <Form.Control as="select" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, position: e.target.value})} >
                    <option>Select Option</option>
                    <option>Sales</option>
                    <option>Developer</option>
                    <option>Human Resources</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" style={{border:'2px solid #001430'}}  onChange={(e) => setForm({...form, email: e.target.value})} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, password: e.target.value})} />
                </Form.Group>
                <Button className="button" type="submit">Register</Button>
            </Form>
        </div>
    )
}

export default Admin_Panel