import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        return (
            <React.Fragment>
                <button onClick={()=>this.context.toggleTheme()}>Toggle the Theme</button>
            </React.Fragment>
          );
    }
}
 
export default ThemeToggle;