import React, { useContext } from 'react';
import './Login.css';
import logo from '../../logos/Group 1329.png';
import google from '../../logos/google.png';
import * as firebase from "firebase/app";

import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const { displayName, email } = res.user;
        const signInUser = {
          isSignedIn: true,
          name: displayName,
          email: email
        }
        setLoggedInUser(signInUser);
        history.replace(from);
      })
      .catch(error => {
        const newUserInfo = { ...loggedInUser };
        newUserInfo.message = error.message;
        setLoggedInUser(newUserInfo);
      });
  }

  const signOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          error: ''
        }
        setLoggedInUser(signedOutUser);
      })
      .catch(error => {

      })
  }

  return (
    <div className="App">
      <Link to="/"><img style={{ height: '60px' }} src={logo} alt="logo" /></Link>
      <div className='loginBox'>
        <div className="loginArea">
          {
            loggedInUser.isSignedIn ?
              <div>
                <h4 >Now log in as {loggedInUser.name || 'Unknown User!'}</h4>
                <button className='googleBtn' onClick={signOut}>
                  <img src={google} style={{ width: '30px', float: 'left', marginLeft: '20px' }} alt="" /> Log Out
                          </button>
              </div>
              :
              <div>
                <h1>Login With</h1>
                <button className='googleBtn' onClick={googleSignIn}>
                  <img src={google} style={{ width: '30px', float: 'left', marginLeft: '20px' }} alt="" /> Continue with Google
                          </button>
              </div>
          }
          <p>Don’t have an account? <span onClick={() => { alert('Sorry! You have to Continue with Google 😜') }} style={{ color: "skyblue", cursor: "pointer" }}>Create an account</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;