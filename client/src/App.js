import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import loginPage from './loginPage';
import mainPage from './mainPage';
import slider from './slider';
import artikelPage from './Artikel';
import Slideshow from './newslider';
import register from './Registration';



function App() {
  return (
    
    <Router>
    <div className ="App">
      <Switch>
      <Route  path  = "/loginPage" exact component = {loginPage} />
      <Route path = "/mainPage" exact component ={mainPage} />
      <Route path = "/slider" exact component ={slider} />
      <Route path = "/Artikel" exact component ={artikelPage} />
      <Route path = "/newslider" exact component ={Slideshow} />
      <Route path = "/Register" exact component ={register} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
