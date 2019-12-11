import React from 'react';
import './App.css';




export default class theHeader extends React.Component{

    render(){
        return (
         <header className="db_header">
          <div className="lt_side">
            <a href className="logo">
              <img className="logo" src="logo01.png" alt = "logo" />
            </a>
          </div>
          <form className="search_box" action> <span className="search_inputbox">
                <input type="text" placeholder="Search" name="search" />
              </span>
          </form>
          <div className="rt_login">
            <a href="loginPage">
              <img src="Login.jpg" alt />Abmelden</a>
          </div>
        </header>

        );

    }
}




