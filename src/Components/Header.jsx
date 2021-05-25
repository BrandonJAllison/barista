import './header.css';
import firebase from 'firebase/app';
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';



const Header = (props) => {

    const [useris, setUserIs] = useState(null);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setUserIs(user.email)
        } else {
          console.log('No fucking user is signed in asshole')
        }
      });
   
    const logout = () => {
        firebase.auth().signOut().then(() =>{
           console.log('done')
        }).catch(function(error) {
        console.log(error)
        });
       }
    return(
        <div className="header" style={{height:'75px', background:'#004AAD'}}>
            <span>Hello   {useris && useris}</span>
            <FontAwesomeIcon className="icon" icon={faSignOutAlt} onClick={logout} />
        </div>
    )
}

export default Header