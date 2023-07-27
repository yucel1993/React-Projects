import React, { useState } from "react";
import { menuIcon } from "../../helper/iconData";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { useAuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, setUser } = useAuthContext();
  const handleClose = () => {
    setToggle(false);
  };
  const logOut = () => {
    setUser(false);
  };
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">Clarus Library</Logo>
      <HamburgerIcon onClick={() => setToggle(!toggle)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={toggle}>
        <MenuLink to="/" onClick={handleClose}>
          Home
        </MenuLink>
        <MenuLink to="/about" onClick={handleClose}>
          About
        </MenuLink>
        {user ? (
          <MenuLink to="/login" onClick={logOut}>
            Logout
          </MenuLink>
        ) : (
          <>
            <MenuLink to="/login" onClick={handleClose}>
              Login
            </MenuLink>
            <MenuLink to="/register" onClick={handleClose}>
              Register
            </MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;