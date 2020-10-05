import React, { useEffect, useState } from 'react';
import "./LandingPage.css";
import Header from '../Header/Header';
import VolunteerDeeds from '../VolunteerDeeds/VolunteerDeeds';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [event, setEvent] = useState([])

  useEffect( ()=> {
    fetch('https://still-brook-08941.herokuapp.com/allEvent')
    .then(res => res.json())
    .then(data => setEvent(data))
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
        
          <div className='container row' style={{marginTop:'70px'}}>
                  {
                    event.map(event => <VolunteerDeeds key={event._id} event={event}></VolunteerDeeds>)
                  }   
          </div>
        
    </div>
  );
};

export default LandingPage;