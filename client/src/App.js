import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/App.css';
import ContentView from './components/ContentView.js';
import NavigationBar from './components/NavigationBar.js';
import SideBar from './components/SideBar.js';
// import ReaderView from './components/ReaderView.js';

class App extends Component {

  user = {
    name: 'Anton Quietzsch',
    mailAdress: 'spam@me.com'
  };

  isCollapsed = false;
  collapseSidebar = (event) => {
    this.isCollapsed = !this.isCollapsed;
    let sideBar = ReactDOM.findDOMNode(this.refs.Sidebar)
    sideBar.setAttribute('collapsed', this.isCollapsed.toString());
  }

  render() {
    return (
      <div className='App'>
        <div id='left' ref='Sidebar'>
          <SideBar user={this.user}/>
        </div>
        <div id='right'>
          <NavigationBar elastic='false' collapseSidebar={this.collapseSidebar.bind(this)}/>
          <ContentView/>
        </div>
      </div>
    );
  }

}

export default App;
