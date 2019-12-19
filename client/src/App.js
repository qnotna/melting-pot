// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Redux setup
import { Provider } from "react-redux";
import store from './store'
import setUser from './actions'

// Components
import AppBase from './components/AppBase'

class App extends Component {
  render(){
    // get the user authentication status from the store
    const { isAuthenticated } = store.getState()
    return (
      <Provider store={store}>
        <div className="App">
          {/* If the user is authenticated show home, else render login component */}
          { isAuthenticated ? <AppBase/> : <h1>LOGIN</h1>}
          </div>
      </Provider>
    );
  }
}

export default App;
