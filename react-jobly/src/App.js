import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import React, { useEffect, useState, useContext } from 'react';
import JoblyApi from './api';
import userContext from "./userContext";

/** App for searching and applying for jobs
 * props: none
 * state: userData
 *
 * App -> NavBar, RoutesList
*/

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState();


  console.log("currentUser", currentUser);
  console.log("token", token);

  useEffect(function getCurrentUserData() {
    async function getData() {
      JoblyApi.token = token;
      const user = await JoblyApi.getUserData(currentUser.username);
      setCurrentUser(currentUser => ({ ...user }));
    }
    getData();
  }, [token]);

  /** login */
  async function login(data) {
    console.log("login", data);

    const token = JoblyApi.login(data);
    const { username } = data.username;

    setToken(token);
    setCurrentUser({ username });
  }

  /** signup */
  async function signup(data) {
    console.log("signup", data);

    const token = JoblyApi.registerUser(data);
    const { username } = data.username;

    setToken(token);
    setCurrentUser({ username });
  }

  /** logout */
  function logout() {
    console.log("logout");

    setToken(null);
    setCurrentUser(null);
  }

  /** updateUser */
  function updateUser(data) {

  }


  return (
    <div className="App">
      <userContext.Provider value={currentUser}>
        <BrowserRouter>
          <NavBar />
          <RoutesList />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
