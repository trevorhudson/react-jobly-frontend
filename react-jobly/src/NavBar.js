import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

/** Renders the Navigation bar
 * props:none
 * state:none
 * App=>NavBar
*/

function NavBar() {
  return (
    <div className="NavBar">
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <NavLink className='navbar-brand' to="/">Jobly</NavLink>
        <ul className="navbar-nav">
          <li className='nav-item'><NavLink className='nav-link' to="/companies">Companies</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to="/jobs">Jobs</NavLink></li>
        </ul>
      </nav>

    </div>



  );
}

export default NavBar;