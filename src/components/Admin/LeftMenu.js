import React, { useContext, useEffect } from 'react';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AddIcon from '@material-ui/icons/Add';
import logo from '../../logos/Group 1329.png';
import { UserContext } from '../../App';
import './LeftMenu.css';

const LeftMenu = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
     useEffect(()=>{
      setLoggedInUser({...loggedInUser, clicked:'volunteerList'})
      },[])
  return (
    <div style={{padding:'10px',height:'100vh',  paddingTop:'20px'}}>
            <img style={{height:'50px'}} src={logo} alt=""/>
        <button className='nav-button' autoFocus>
        <div onClick={()=>setLoggedInUser({...loggedInUser,clicked:'volunteerList'})} style={{display:'flex',cursor:'pointer', margin:'15px 0px', alignItems:'center'}}>
            <div>
                <PeopleOutlineIcon></PeopleOutlineIcon>
            </div>
            <div style={{marginLeft:'10px'}}>
                <b>Volunteer register list</b>
            </div>
        </div>
        </button>

        <button className='nav-button'>
        <div onClick={()=>setLoggedInUser({...loggedInUser,clicked:'addEvent'})} style={{display:'flex', cursor:'pointer', }}>
            <div>
                <AddIcon></AddIcon>
            </div>
            <div style={{marginLeft:'10px'}}>
                <b>Add Event</b>
            </div>
        </div>
        </button>

        </div>
  );
};

export default LeftMenu;

