import React, { Component,useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';



 function BookList() {

    const {dark,light,isLightTheme}  = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{background : theme.bg,color:theme.syntax}}>
                  <ul>
                    <li style={{background : theme.ui}}>The way of the kings </li>
                    <li style={{background : theme.ui}}>The name of the wind</li>
                    <li style={{background : theme.ui}}>the final empire</li>
                </ul>
            </div>
    )
}

 
export default BookList;