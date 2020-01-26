import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'

const render = function() {
    ReactDOM.render(<App />, document.getElementById('root'));
}
// Any time there is a successful update to the store the
// <App> component will be re-renderd with new state values!
store.subscribe(render);

render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
