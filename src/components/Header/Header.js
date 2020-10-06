import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './Header.css';
import plus from '../../logos/plus 1.png';

const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <Link to="/"><img style={{height: '60px'}} src={logo} alt="logo"/></Link>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <img style={{height: '20px'}} src={plus} alt=""/>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link className="link-item" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link className="link-item" to="/unComplete">Donation</Link>
          </li>
          <li class="nav-item">
            <Link className="link-item" to="/events">Events</Link>
          </li>
          <li class="nav-item">
            <Link className="link-item" to="/unComplete">Blog</Link>
          </li>
          {
            loggedInUser.isSignedIn ?
                <li class="nav-item">
                  <Link className="link-item" to="/login"><h5>{loggedInUser.name}</h5></Link>
                </li>
              :
                <li class="nav-item">
                  <Link className="link-item" to="/register"><button className='btn register-btn'>Register</button></Link>
                </li>
                
          }
          <li class="nav-item">
            <Link className="link-item" to="/admin"><button className='btn admin-btn'>Admin</button></Link>
          </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

{/* <ul class="navbar-nav">
      <li class="nav-item active">
      <Link className="link-item" to="/">Home</Link>
      </li>
      <li class="nav-item">
      <Link className="link-item" to="/unComplete">Donation</Link>
      </li>
      <li class="nav-item">
      <Link className="link-item" to="/events">Events</Link>
      </li>
      <li class="nav-item">
      <Link className="link-item" to="/unComplete">Blog</Link>
      </li>
    </ul> */}

{/* <Link className="link-item" to="/">Home</Link>
<Link className="link-item" to="/unComplete">Donation</Link>
<Link className="link-item" to="/events">Events</Link>
<Link className="link-item" to="/unComplete">Blog</Link> */}