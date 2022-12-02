import { NavLink, Link } from "react-router-dom";
import React, { useContext } from 'react';

import userContext from "./user-context";
// import "./NavBar.css";



/** Renders the Navigation bar
 * props:none
 * state:none
 * App=>NavBar
*/

function NavBar({ logout }) {
  const { currentUser } = useContext(userContext);

  // async function handleLogout() {
  //   await logout();
  // }



  return (
    <div className="NavBar">
      <nav className='navbar navbar-expand-md navbar-light bg-light'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand fw-bold' to="/">Jobly</NavLink>


          {currentUser &&
            <ul className="navbar-nav">
              <li className='nav-item'><NavLink className='nav-link' to="/companies">Companies</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link' to="/jobs">Jobs</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link' to="/profile">Profile</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link' onClick={logout}>Logout {currentUser.username}</NavLink></li>
            </ul>
          }

          {!currentUser &&
            <ul className="navbar-nav">
              <li className='nav-item'><NavLink className='nav-link' to="/login">Login</NavLink></li>
              <li className='nav-item'><NavLink className='nav-link' to="/signup">Signup</NavLink></li>
            </ul>}
        </div>
      </nav>

    </div>

  );
}

export default NavBar;