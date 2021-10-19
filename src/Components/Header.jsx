import './header.scss';
import firebase from 'firebase/app';
import "firebase/auth";
import Logo from '../Assets/barista_logo.png';
import { Button, Form, Image, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'



const Header = (props) => {

    const [useris, setUserIs] = useState(null);
    const history = useHistory()

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setUserIs(user.email)
        } else {
          console.log('There is no user signed in')
        }
      });
   
    const logout = () => {
        firebase.auth().signOut().then(() =>{
           console.log('done')
           history.push("/thankyou")
        }).catch(function(error) {
        console.log(error)
        });
       }

    

    return(
        <div className="header" style={{height:'75px', background:'#004AAD'}}>
          <div className="logos">
        
          </div>
          <div className="links">
          <Link className="header_link" to="/admin">Admin</Link>
          <Link className="header_link" to="/sales">Sales</Link>
          <Link className="header_link" to="/customers">Customers</Link>
          </div>
            {/* <span>Hello   {useris && useris}</span> */}
            <FontAwesomeIcon className="header_link" icon={faSignOutAlt} onClick={logout} />
        </div>
    )
}

export default Header