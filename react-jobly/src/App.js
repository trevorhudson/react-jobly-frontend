import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import React from 'react';

/** App for searching and applying for jobs
 * props: none
 * state: none
 *
 * App -> NavBar, RoutesList
*/

function App() {
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
