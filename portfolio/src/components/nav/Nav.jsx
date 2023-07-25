import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <div>
        <ul>
            <li>
                <NavLink className="nav-link" activeClassName="active" to={"/"} >HOME</NavLink>
            </li>
            <li>
                <NavLink className="nav-link" activeClassName="active" to={"/about"} >ABOUT ME</NavLink>
            </li>
            <li>
                <NavLink className="nav-link" activeClassName="active" to={"/project"} >MY PROJECTS</NavLink>
            </li>
            <li>
                <NavLink className="nav-link" activeClassName="active" to={"/contact"} >CONTACT</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Nav