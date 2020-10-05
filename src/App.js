import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import EventTasks from './components/EventTasks/EventTasks';
import UnComplete from './components/UnComplete/UnComplete';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser , setLoggedInUser]= useState({
    isSignedIn: false,
    name :'',
    email:''
  });
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]} >
      <Router>
        <Switch>
          <Route path="/home">
            <LandingPage></LandingPage>
          </Route>

          <Route path="/admin">
            <Admin></Admin>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/register">
            <Register></Register>
          </PrivateRoute>

          <PrivateRoute path="/events">
            <EventTasks></EventTasks>
          </PrivateRoute>

          <Route path="/unComplete">
            <UnComplete></UnComplete>
          </Route>

          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
