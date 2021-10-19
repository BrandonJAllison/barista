import React, {useState} from 'react';
import { Button, Form, Image, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Logo from '../Assets/barista_logo.png';
import {login} from '../auth'
import '../App.css'
import firebase from 'firebase/app';
import "firebase/auth";


const LoginView = () => {

    const [form,setForm] = useState({
       
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(form);
  
    }
  
    return(
        <>
            <Form className="form" style={{background:'rgba(245,245,245,1)', padding: '20px 30px 40px 30px', borderRadius: '8px', fontWeight:'bold'}} onSubmit={handleSubmit}>
                <Image src={Logo} style={{height:'300px'}} />
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, email: e.target.value})} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, password: e.target.value})} />
                </Form.Group>
                <Button className="button" type="submit">
                     Login
                </Button>
               
            </Form>


        </>
    )
}

export default LoginView