import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import image from '../../images/extraVolunteer.png';
import './EventTasks.css';

const EventTasks = () => {
  const [loggedInUser] = useContext(UserContext);
  const [userEvents, setUserEvents] = useState([])

  useEffect( ()=>{
    fetch('https://still-brook-08941.herokuapp.com/getEvents',{
      headers: {
        'Content-Type':'application/json',
         email: loggedInUser.email
      }
    })
    .then(res => res.json())
    .then(result => setUserEvents(result));
  })

  const handleCancelBtn= (id) => {
    fetch('https://still-brook-08941.herokuapp.com/removeEvent',{
      method: 'DELETE',
      headers:{
            'Content-Type':'application/json',
            id:id
        }
    })
    .then(res => res.json())
    .then(result => {
      if(result){
        const exitedEvents = userEvents.filter(data => data._id !== id)
        setUserEvents(exitedEvents);
      }
    })
  }

  return (
    <div className='eventBg' >
      <Header></Header>
      
      <div  className='container' style={{marginTop:'70px'}}>
            
            <div>
            <Grid container item xs={12} spacing='5'>
                {
                    userEvents.map(event=>{
                       return(
                        
                        <Grid item xs={12} md={6} key={event._id}>
                            <div className='eventBox'>
                                <div>
                                    <img className='eventImg' src={image} alt=""/>
                                </div>
                                <div style={{marginLeft:'10px', width:'100%'}}>
                                    <h4 >{event.eventName}</h4>
                                    <p ><strong>{event.date}</strong></p>
                                    <div style={{marginLeft:'132px',marginTop: '77px'}}>
                                    <button  className='cancelBtn' onClick={()=>handleCancelBtn(event._id)}>
                                        Cancel
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        
                       )
                    })
                }
            </Grid>
            </div>
        </div>
      
    </div>
  );
};

export default EventTasks;