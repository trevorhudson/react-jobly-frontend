import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter } from "react-router-dom";

import useLocalStorage from "./useLocalStorage";

import NavBar from './NavBar';
import RoutesList from './RoutesList';
import JoblyApi from './api';
import userContext from "./user-context";
import decode from 'jwt-decode';
import BG_IMAGE from "./bg.jpg"

export const TOKEN_STORAGE_ID = "jobly-token";

/** App for searching and applying for jobs.
 * props: none
 * state:
 * 1. currentUser = Keeps track of the current user.
 * currentUser status determines access to certain routes.
 * { isLoaded: false, data: {username: test, firstName: test, lastName: test, email: test, jobs:} },
 * 2. jwt = Given a jwt from the backend after registration/login and used as a means
 * of authentication when making future requests. Handled using personalized hook
 * useLocalStorage.
 *
 * App -> NavBar, RoutesList
*/

function App() {
  const [currentUser, setCurrentUser] = useState({ isLoaded: false, data: null });
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.log("currentUser", currentUser);
  console.log("token", token);

  useEffect(function getCurrentUserData() {
    console.log('useEffect triggered');
    async function getData() {

      if (token) {
        try {
          console.log('useEffect try block');
          const { username } = decode(token);
          JoblyApi.token = token;
          const { user } = await JoblyApi.getUserData(username);
          setCurrentUser({ isLoaded: true, data: user });
        }
        catch {
          console.log('useEffect catch error block');
          setCurrentUser({ isLoaded: true, data: null });
        }
      }

      else {
        setCurrentUser({ isLoaded: true, data: null });
      }

    }
    getData();
  }, [token]);

  /** login */
  async function login(data) {
    console.log("login", data);

    const token = await JoblyApi.loginUser(data);
    setToken(token);
  }


  /** signup */
  async function signup(data) {
    console.log("signup", data);
    const token = await JoblyApi.registerUser(data);
    setToken(token);
  }

  /** logout */
  function logout() {
    console.log("logout");
    setToken(null);
  }

  /** updateUser */
  async function updateUser(data, username) {
    const user = await JoblyApi.updateUser(data, username);
    setCurrentUser({
      isLoaded: true,
      data: user
    });
  }

  /** applyToJob */
  async function applyToJob(jobId, username) {
    await JoblyApi.applyToJob(jobId, username);
    setCurrentUser(user => {
      user.data.applications.push(jobId);

      return { ...user };
    });

  }


  /** If there is current user is not loaded yet render loading... */
  if (!currentUser.isLoaded) return <h1>Loading...</h1>;

  return (

    <BrowserRouter>
      <userContext.Provider
        value={{
          currentUser: currentUser.data
        }}
      >

        <div className="App" style={{ backgroundImage:`url(${BG_IMAGE})`,backgroundSize:"cover",minHeight:1000
    }}>
          <NavBar logout={logout} />
          <RoutesList login={login} signup={signup} update={updateUser} apply={applyToJob} />
        </div>

      </userContext.Provider>
    </BrowserRouter >
  );
}
export default App;
