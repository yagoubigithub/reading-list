import React, { Component,useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/authContext";

        
const Navbar = () => {
  const { dark, light, isLightTheme } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (  <nav style={{ background: theme.ui, color: theme.syntax }}>
    <h1>Conetxt App</h1>
    <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged out"}
    </div>
    <ul>
      <li>Home </li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav> );
}
 
export default Navbar;


