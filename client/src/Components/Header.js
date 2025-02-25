import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import applogo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar>
        <Nav>
          <NavItem>
            <img src={applogo} className="logo" />
          </NavItem>
          <NavItem>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
          </NavItem>
          <NavItem>
            <Link to="/profile">Profile</Link>
          </NavItem>
          <NavItem>
            <Link to="#">Logout</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
