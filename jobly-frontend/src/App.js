import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter } from "react-router-dom";

import useLocalStorage from "./useLocalStorage";

import NavBar from './NavBar';
import RoutesList from './RoutesList';
import JoblyApi from './api';
import userContext from "./user-context";
import decode from 'jwt-decode';
export const TOKEN_STORAGE_ID = "jobly-token";



//TODO: State data state
/** App for searching and applying for jobs
 * props: none
 * state: userData
 *
 * App -> NavBar, RoutesList
*/

function App() {
  const [currentUser, setCurrentUser] = useState({ isLoaded: false, data: null });
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  // const [token, setToken] = useState(token);

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
    // setCurrentUser({ // redundant
    //   isLoaded: true,
    //   data: null
    // });
    // setCurrentUser(is);
  }

  /** updateUser */
  // update res name
  async function updateUser(data, username) {
    const res = await JoblyApi.updateUser(data, username);
    setCurrentUser({
      isLoaded: true,
      data: res
    });
  }


  // IF LOADING -> return <h1> Loading </h1>
  if (!currentUser.isLoaded) return <h1>Loading...</h1>;

  return (

    <BrowserRouter>
      <userContext.Provider
        value={{
          currentUser: currentUser.data
        }}
      >

        <div className="App">
          <NavBar logout={logout} />
          <RoutesList login={login} signup={signup} update={updateUser} />
        </div>

      </userContext.Provider>
    </BrowserRouter >
  );
}
export default App;
