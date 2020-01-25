// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Redux setup
import { Provider } from "react-redux";
import store from './store'

// Components
import AppBase from './components/AppBase'
import Login from './components/auth/Login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={AppBase} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
