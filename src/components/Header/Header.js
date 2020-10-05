import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './Header.css';

const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <Link to="/"><img style={{height: '60px'}} src={logo} alt="logo"/></Link>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <Link className="link-item" to="/">Home</Link>
          <Link className="link-item" to="/unComplete">Donation</Link>
          <Link className="link-item" to="/events">Events</Link>
          <Link className="link-item" to="/unComplete">Blog</Link>
          
          {
            loggedInUser.isSignedIn ?
                <Link className="link-item" to="/login"><h5>{loggedInUser.name}</h5></Link>
              :
                <Link className="link-item" to="/register"><button className='btn register-btn'>Register</button></Link>
          }
          <Link className="link-item" to="/admin"><button className='btn admin-btn'>Admin</button></Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;