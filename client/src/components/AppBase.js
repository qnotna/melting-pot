import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../stylesheets/App.css';

import ContentView from './ContentView.js';
import NavigationBar from './NavigationBar.js';
import SideBar from './SideBar.js';
import ReaderView from './ReaderView.js';

import userExampleData from '../example/user.json';
import sideBarSectionsExampleData from '../example/sideBarSections.json';
import contentViewSectionsExampleData from '../example/contentViewSections.json';
import readerViewArticle from '../example/readerViewArticle.json';


// import readerViewArticleExampleData from './example/readerViewArticle.json';

import api from '../utils/API';

import store from '../store'
import { addSection, setSections } from '../actions'
import { Components } from '../utils/Components';
import Settings from "./SettingsModule"

class AppBase extends Component {

  isCollapsed = false;

  collapseSidebar = (event) => {
    this.isCollapsed = !this.isCollapsed;
    let sideBar = ReactDOM.findDOMNode(this.refs.Sidebar)
    sideBar.setAttribute('collapsed', this.isCollapsed.toString());
    document.getElementById('right').setAttribute('collapsed', this.isCollapsed.toString());
  }

  test(){
    console.log("TEST")
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
      case Components.HOME:
        return <ContentView />

      case Components.SEARCH_RESULTS:
        return <ContentView />
        
      case Components.BUSINESS:
        return <ContentView />
      case Components.ENTERTAINMENT:
        return <ContentView />
      case Components.HEALTH:
        return <ContentView />
      case Components.SCIENCE:
        return <ContentView />
      case Components.SPORTS:
        return <ContentView />
      case Components.TECHNOLOGY:
        return <ContentView />

      case Components.SETTINGS:
        return <Settings />

      // case Components.ARTICLE:
      //   return <ReaderView article={readerViewArticle}/>
    }
  }

  render() {
    // Get the name of the component that should be renderd 
    // as App content from the App global store
    const { content_component } = store.getState()

    return (
      <div className='App'>
        <div id='left' ref='Sidebar'>
          <SideBar
            sections={sideBarSectionsExampleData}
            user={userExampleData}
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