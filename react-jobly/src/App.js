import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import React, { useEffect, useState, useContext } from 'react';
import JoblyApi from './api';
import userContext from "./user-context";
import decode from 'jwt-decode';

/** App for searching and applying for jobs
 * props: none
 * state: userData
 *
 * App -> NavBar, RoutesList
*/

function App() {
  const [currentUser, setCurrentUser] = useState({ isLoaded: false, data: null });
  const [token, setToken] = useState(null); // local storage

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
          setCurrentUser({ isLoaded: true, data: user }); // SET LOADING TO FALSE
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
    // setCurrentUser(is);
  }

  /** updateUser */
  function updateUser(data) {

  }


  // IF LOADING -> return <h1> Loading </h1>
  if (!currentUser.isLoaded) return <h1>Loading...</h1>;


  return (
    <div className="App">
      <userContext.Provider value={currentUser}>
        <BrowserRouter>
          <NavBar />
          <RoutesList currentUser={currentUser.data} login={login} signup={signup} logout={logout} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
