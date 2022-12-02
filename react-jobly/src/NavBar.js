import { NavLink, Link } from "react-router-dom";
import React, { useContext } from 'react';

import userContext from "./user-context";
// import "./NavBar.css";



/** Renders the Navigation bar
 * props:none
 * state:none
 * App=>NavBar
*/

function NavBar() {
  const { username } = useContext(userContext);

  /** Check if logged in -> show companies/jobs/profile/logout */

  /** else show login/signup  */

  return (
    <div className="NavBar">
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <NavLink className='navbar-brand fw-bold' to="/">Jobly</NavLink>

        {username &&
          <ul className="navbar-nav">
            <li className='nav-item'><NavLink className='nav-link' to="/companies">Companies</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to="/jobs">Jobs</NavLink></li>
          </ul>
        }

        {!username &&
          <ul className="navbar-nav">
            <li className='nav-item'><NavLink className='nav-link' to="/login">Login</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to="/signup">Signup</NavLink></li>
          </ul>}

      </nav>

    </div>



  );
}

export default NavBar;