import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LoginView from './Views/Login';
import RegistrationView from './Views/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import "firebase/auth";
import {useState} from 'react'
import Home from './Views/Home'
import Header from './Components/Header'

function App() {
  const [isuser, setUser] = useState(null)

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setUser(user.email)
    } else {
      console.log('No fucking user is signed in asshole')
    }
  });

  if (isuser == null){
    return(
      <Router>
      <div className="App">
        <div>
        <Route exact path='/register' component={RegistrationView} />
        <Route exact path='/' component={LoginView} />
        </div> 
      </div>
      </Router>
    )
  } else

  return (
    <Router>
    <div>
    <Header/>
    <Route path="/home" render={props => <Home {...props} />}/>
   </div>
   </Router>
  );
}

export default App;
