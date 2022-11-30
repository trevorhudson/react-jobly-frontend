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
      <nav>
        <ul className="NavBarList">
          <li><Link to="/">Jobly</Link></li>
          <li><NavLink to="/companies">Companies</NavLink></li>
          <li><NavLink  to="/jobs">Jobs</NavLink></li>
        </ul>
      </nav>

    </div>



  );
}

export default NavBar;