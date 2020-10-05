import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import "./VolunteerDeeds.css";

const VolunteerDeeds = ({event}) => {
  const history=useHistory()
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const eventHandler = () =>{
    setLoggedInUser({...loggedInUser,event})
    history.push("/register")
  }
  return (
      <div onClick={eventHandler}  className="App col-md-3 ">
        <img style={{height:"300px" , margin:"30px"}} src={require(`../../images/${event.pic}`)} alt=""/>
        <h3>{event.name}</h3>
      </div>
  );
};

export default VolunteerDeeds;