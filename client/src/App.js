import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import loginPage from './loginPage';
import mainPage from './mainPage';

function App() {
  return (
    <Router>

    
    <div className ="App">
      <loginPage />
      <Switch>
      <Route  path  = "/loginPage" exact component = {loginPage} />
      <Route path = "/mainPage" exact component ={mainPage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
