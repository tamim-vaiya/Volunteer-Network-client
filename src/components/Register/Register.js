import React, { useContext, useState } from 'react';
import "./Register.css";
import logo from '../../logos/Group 1329.png';
import { FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';
import { UserContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';

const Register = () => { 
  const [loggedInUser] = useContext(UserContext);
  const history = useHistory()
  const [formDetails, setFormDetails] = useState({
    name: loggedInUser.name,
    eventName:loggedInUser.event?.name,
    date:new Date().toDateString(),
    email:loggedInUser.email
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/submitForm',{
      method:'POST', 
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(formDetails)
    })
    .then(res=>res.text())
    .then(result=>{
        if(result === 'true'){
            history.push('/events')
        }
    })
  }
  

  return (
    <div className="App">

      <Link to="/"><img style={{height: '60px'}} src={logo} alt="logo"/></Link>

      <form onSubmit={handleSubmit} >
        <FormGroup className="registerBox">
          <h3 className="registerHeader d-flex justify-content-start" style={{ marginTop: '0' }}>Register as a Volunteer</h3>

          <FormControl className='formInput'>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input name='name' id="name" aria-describedby="my-helper-text" value={loggedInUser.name}  />
          </FormControl>
          <FormControl className='formInput'>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input name='email' id="email" aria-describedby="my-helper-text" value={loggedInUser.email}  />
          </FormControl>
          <FormControl className='formInput'>
            <InputLabel htmlFor="date">Date</InputLabel>
            <Input name='date' id="date" aria-describedby="my-helper-text" value={new Date().toDateString()} />
          </FormControl>
          <FormControl className='formInput'>
            <InputLabel htmlFor="description">Description</InputLabel>
            <Input onBlur={(event)=>setFormDetails({...formDetails,description:event.target.value})}  id="description" aria-describedby="my-helper-text" required />
          </FormControl>
          <FormControl className='formInput'>
            <InputLabel  htmlFor="description">Organization Name</InputLabel>
            <Input onBlur={(event)=>setFormDetails({...formDetails,eventName:event.target.value})}  name='organizationName' id="organizationName" aria-describedby="my-helper-text" required />
          </FormControl>


          <button type='submit'
            className="submitBtn">
            Registration
          </button>

        </FormGroup>
      </form>
    </div>
  );
};

export default Register;