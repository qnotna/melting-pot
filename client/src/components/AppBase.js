import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../stylesheets/App.css';
import '../stylesheets/DarkMode.css';

import ContentView from './ContentView.js';
import NavigationBar from './NavigationBar.js';
import SideBar from './SideBar.js';
import ReaderView from './ReaderView.js';

// import userExampleData from '../example/user.json';
import sideBarSectionsExampleData from '../example/sideBarSections.json';

import api from '../utils/API';

import store from '../store'
import { setSections, setArticle,addSection } from '../actions/newsActions'

import { Components } from '../utils/Components';

import '../../node_modules/material-design-icons/iconfont/material-icons.css'

class AppBase extends Component {

  isCollapsed = false;

  collapseSidebar = (event) => {
    this.isCollapsed = !this.isCollapsed;
    let sideBar = ReactDOM.findDOMNode(this.refs.Sidebar)
    sideBar.setAttribute('collapsed', this.isCollapsed.toString());
    document.getElementById('right').setAttribute('collapsed', this.isCollapsed.toString());
  }

  loadSearchResultSections(){
    const input = store.getState().search_input
    api.getSearchResults((res) => {
      store.dispatch( setSections ( res ))
    }, input)
  }

  // Given a name return coresponding component
  getComponentByName(component_name) {
    switch (component_name) {
      case Components.SETTINGS:
        // return <Settings />

      case Components.READER_VIEW:
        return <ReaderView />

      default:
        return <ContentView />
      }
  }

  componentDidMount(){
    // Load home sections
    api.getHot((res) => {
      store.dispatch( setSections ( [res] ))
    })
    api.getLatest((res) => {
      store.dispatch( addSection( res ))
    })
  }

  render() {
    // Get the name of the component that should be renderd 
    // as App content from the App global store
    const { content_component } = store.getState().news

    return (
      <div className='App' /*id='app'*/>
        <div id='left' ref='Sidebar'>
          <SideBar
            sections={sideBarSectionsExampleData}
          />
        </div>
        <div id='right'>
          <NavigationBar
            collapseSidebar={this.collapseSidebar.bind(this)}
          />

          {this.getComponentByName(content_component)}

        </div>
      </div>
    );
  }

}

export default AppBase;