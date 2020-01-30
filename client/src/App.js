// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// Redux setup
import { Provider } from "react-redux";
import store from './store'

// Components
import AppBase from './components/AppBase'
import Login from './components/auth/Login';

import './stylesheets/index.scss';
import NoContent from './components/NoContent';

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/login" component={Login} />
            <Route path="/" component={AppBase} />
            <Redirect from="/" to="melting-hot"/>
            {/* <Switch> */}
            <Route path='/*' component={() => <NoContent errorData={{message: "Route not found", statuscode: 404}}/>}/>
            {/* </Switch> */}
              
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
