import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LoginView from './Views/Login';
import ThankYou from './Views/ThankYou';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import "firebase/auth";
import {useState} from 'react'
import Home from './Views/Home'
import Header from './Components/Header'
import Sales from './Views/SalesManagement'
import CustomerManagement from './Views/CustomerManagement'
import Admin from './Views/AdminPanel'
import CustomerInfo from './Views/CustomerInfo'
import "firebase/firestore";
import {useEffect} from 'react'
import ReactNotifications from 'react-notifications-component';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  const [isuser, setUser] = useState(null)
  const [userData, setUserData] = useState()

  useEffect(() => {
    let db = firebase.firestore();
    db.collection("users")
        .doc('Vpmxp8TwYNM5LyycUuqjZTpVTV02')
        .get()
        .then(doc => {
        const data = doc.data();
        setUserData(data)
        console.log('data',data); 
        });
  },[]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUser(user.email)
      } else {
        setUser(null)
        console.log('No fucking user is signed in asshole')
      }
    });
  },[isuser])



  if (isuser == null){
    return(
      <Router>
      <div className="App">
        <div>
        <Route exact path='/' component={LoginView} />
        <Route path ="/thankyou" component={ThankYou}/>
        </div> 
      </div>
      </Router>
    )
  } else

  return (
  <RecoilRoot>
    <Router>
    <div>
    <Header data={userData}/>
    <ReactNotifications />
    <Route exact path="/" render={props => <Home {...props} data={userData} />}/>
    <Route path="/sales" component={Sales}/>
    <Route path="/customers" component={CustomerManagement}/>
    <Route path="/admin" component={Admin}/>
    <Route path="/clientInfo/:id" render={(props) => <CustomerInfo {...props}/>}/>
   </div>
   </Router>
   </RecoilRoot>
  );
}

export default App;
