import React from 'react';
import './App.css';


function loginPage () {
  return (
    <div className="wrapper">
      <header className="login_header">
        <div className="lt_text">
          <img className="logo" src="logo01.png" alt />
        </div>
        <div className="cnt_text">
          <h3>Login</h3>
        </div>
      </header>
      <div className="login_pannel">
        <div className="login_body">
          <div className="login_incon">
            <img className="p_logo" src="LoginIcon.jpg" alt />
          </div>
          <div className="login_form">
            <form action="mainPage">
              <input type="text" placeholder="E-Mail Address/Username " />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Login" className="submit_btn" />
              <input type="reset" value="cancel" className="cancel_btn" />
            </form>
          </div>
        </div>
        <div className="signup">
          <p>Not a member yet? <span>
                Sign up&nbsp;
                <a href="here" target="_blank">
                  here.
                </a>
              </span>
          </p>
        <div className="clear" /></div>
    </div>
     <div className="clear" /></div>

  );
}

export default loginPage;
