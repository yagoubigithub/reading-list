import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import AuthContextProvider, { AuthContext } from "../contexts/authContext";

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => {
          return (
            <ThemeContext.Consumer>
              {themeContext => {
                const { dark, light, isLightTheme } = themeContext;
                const theme = isLightTheme ? light : dark;
                const { isAuthenticated, toggleAuth } = authContext;
                return (
                  <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Conetxt App</h1>
                    <div onClick={toggleAuth}>
                        {isAuthenticated ? "Logged in" : "Logged out"}
                    </div>
                    <ul>
                      <li>Home </li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
