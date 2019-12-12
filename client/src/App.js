import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'

import Login from './components/auth/Login'
import Home from './components/Home'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </div>
    </Router>
    </Provider>

  );
}

export default App;
