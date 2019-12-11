import React from 'react';
import './App.css';




export default class register extends React.Component{

    render(){
        return (
          <div className='wrapper'>
          <header className="login_header">
              <div className="lt_text">
                  <img className="logo" src="logo01.png" alt />
              </div>
              <div className="cnt_text">
                  <h3>Register</h3>
              </div>
          </header>
          <div className='register_pannal'>
              <div class="container">
      
                  <p>Please fill in this form to create an account.</p>
                  <hr/>
                  <label for="username"><b>User Name</b></label><br/>
                  <input type="text" placeholder="Enter your Username" name="username" required/>
                  <div className="clear" />
                  <label for="email"><b>Email</b></label><br/>
                  <input type="text" placeholder="Enter Email" name="email" required/>
                  <div className="clear" />
      
                  <label for="psw"><b>Password</b></label><br/>
                  <input type="password" placeholder="Enter Password" name="psw" required/>
                  <div className="clear" />
                  <label for="psw-repeat"><b>Repeat Password</b></label><br/>
                  <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
                  <hr/>
                  <p>By creating an account you agree to our <a href="terms">Terms & Privacy</a>.</p>
                  <div className="clear" />
                  <button type="submit" class="registerbtn">Register</button>
              </div>
              <div className="clear" />
              <div class="container.signin">
                  <p>Already have an account? <a href="loginPage" target = "_self">Sign in</a>.</p>
              </div>
              <div className="clear" />
      
          </div>
      
      </div>
        );




    }






}