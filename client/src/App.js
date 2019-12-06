import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'

import Login from './components/auth/Login'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
    </Provider>

  );
}

export default App;
