import React from 'react';
import './stylesheets/App.css';
// import ContentView from './components/ContentView.js';
import NavigationBar from './components/NavigationBar.js';
import SideBar from './components/SideBar.js';
import ReaderView from './components/ReaderView.js';

function App() {

  let user = {
    name: 'Anton Quietzsch',
    mailAdress: 'anton.quietzsch@icloud.com'
  };

  return (
    <div className='App'>
      <div id='left'>
        <SideBar user={user}/>
      </div>
      <div id='right'>
        <NavigationBar elastic='true'/>
        <ReaderView/>
      </div>
    </div>
  );

}

export default App;
