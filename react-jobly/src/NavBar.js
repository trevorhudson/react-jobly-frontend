import { NavLink, Link } from "react-router-dom";
/** Renders the Navigation bar
 * props:none
 * state:none
 * App=>NavBar
*/
function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">Jobly</Link>
      <ul>
        <li>
          <NavLink to="/companies">Companies</NavLink>
        </li>
        <li>
          <NavLink to="/jobs">Jobs</NavLink>
        </li>
      </ul>

    </div >
  );
}

export default NavBar;