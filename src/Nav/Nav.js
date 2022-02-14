import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="topnav">
      <NavLink activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink to="/Todo">Todo app</NavLink>
      <NavLink to="/">Timer apps</NavLink>
      <NavLink to="/">Secret</NavLink>
    </div>
  );
};
export default Nav;
