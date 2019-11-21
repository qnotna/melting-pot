import React from 'react';
import './stylesheets/App.css';
import ContentView from './components/ContentView.js';
import NavigationBar from './components/NavigationBar.js';
import SideBar from './components/SideBar.js';

function App() {
  return (
    <div className='App'>
      <div id='left'>
        <SideBar/>
      </div>
      <div id='right'>
        <NavigationBar/>
        <ContentView/>
      </div>
    </div>
  );
}

export default App;
