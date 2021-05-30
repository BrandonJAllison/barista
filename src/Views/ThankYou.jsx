import React from 'react'
import {useHistory} from 'react-router-dom'
import { Button} from 'react-bootstrap';


import '../App.css'

const ThankYou = () => {

    const history = useHistory()

    const backhome = () => {
        history.push("/")
    }

 
    return(
        <>
        <h2 style={{color:'white'}}>Thank you for using Barista!</h2>
         <Button onClick={() => backhome()}>Log Back In</Button>
        </>
    )
}

export default ThankYou