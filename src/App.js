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
import Sales from './Views/SalesManagement'
import CustomerManagement from './Views/CustomerManagement'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

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
  <RecoilRoot>
    <Router>
    <div>
    <Header/>
    <Route exact path="/" render={props => <Home {...props} />}/>
    <Route path="/sales" component={Sales}/>
    <Route path="/customers" component={CustomerManagement}/>
   </div>
   </Router>
   </RecoilRoot>
  );
}

export default App;
