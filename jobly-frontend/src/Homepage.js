import { NavLink, Link } from "react-router-dom";
import React, { useContext } from 'react';
import userContext from "./user-context";

import './Homepage.css';
/** Renders the home page
 * state: none
 * props: none
 * App -> Routes -> HomePage
 */

function Homepage() {

  const { currentUser } = useContext(userContext);


  return (
    <div className="Homepage col-md-4 offset-md-4">
      <div className='card'>

        <div className='card-body'>
          <h1 className='fw-bold mb-4'> Jobly </h1>
          <p className='lead'> All the jobs in one, convenient place.</p>


          {!currentUser && (
            <>
              <div className='text-center'>
                <NavLink className='btn btn-primary fw-bold me-3 ' to="/login">Login</NavLink>
                <NavLink className='btn btn-primary fw-bold' to="/signup">Signup</NavLink>
              </div>
            </>
          )}

          {currentUser && (
            <>
              <h1 className='fw-bold mb-4'> Welcome Back, {currentUser.firstName}</h1>
            </>

          )}

        </div>
      </div>
    </div>
  );
}

export default Homepage;