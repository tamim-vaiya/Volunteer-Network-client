import React, { useContext, useEffect } from 'react';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AddIcon from '@material-ui/icons/Add';
import logo from '../../logos/Group 1329.png';
import { UserContext } from '../../App';
import './LeftMenu.css';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
     useEffect(()=>{
      setLoggedInUser({...loggedInUser, clicked:'allVolunteers'})
      },[])
  return (
    <div className='MenuArea'>
            <Link to="/"><img style={{height:'50px'}} src={logo} alt=""/></Link>
        <button className='menuBtn' autoFocus>
        <div onClick={()=>setLoggedInUser({...loggedInUser,clicked:'allVolunteers'})} style={{display:'flex',cursor:'pointer', margin:'15px 0px', alignItems:'center'}}>
            <div>
                <PeopleOutlineIcon></PeopleOutlineIcon>
            </div>
            <div style={{marginLeft:'10px'}}>
                <b>Volunteer register list</b>
            </div>
        </div>
        </button>

        <button className='menuBtn'>
        <div onClick={()=>setLoggedInUser({...loggedInUser,clicked:'pushNewEvent'})} style={{display:'flex', cursor:'pointer', }}>
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

