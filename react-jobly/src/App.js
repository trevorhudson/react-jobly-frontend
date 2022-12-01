import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import React, { useState } from 'react';


/** App for searching and applying for jobs
 * props: none
 * state: userData
 *
 * App -> NavBar, RoutesList
*/

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState();

  /** login */
  function login() { }

  /** signup */
  function signup() { }

  /** logout */
  function logout() { }

  /** updateUser */
  function updateUser() { }


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
