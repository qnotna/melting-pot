import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactLoading from 'react-loading';
import { Switch, Route } from 'react-router';


import ContentView from './ContentView.js';
import ReaderView from './ReaderView.js';
import SettingsView from './settings/SettingsView.js';
import NavigationBar from './NavigationBar.js';
import SideBar from './SideBar.js';

import sideBarSectionsExampleData from '../example/sideBarSections.json';

import api from '../utils/API';

import store from '../store'
import { setSections, addSection } from '../actions/newsActions'

import { Components } from '../utils/Components';
import { Routes } from '../routes/index';
import '../../node_modules/material-design-icons/iconfont/material-icons.css'

class AppBase extends Component {
  routes = Routes;
  isCollapsed = false;

  collapseSidebar = (event) => {
    this.isCollapsed = !this.isCollapsed;
    let sideBar = ReactDOM.findDOMNode(this.refs.Sidebar)
    sideBar.setAttribute('collapsed', this.isCollapsed.toString());
    document.getElementById('right').setAttribute('collapsed', this.isCollapsed.toString());
  }

  // Given a name return coresponding component
  getComponentByName(component_name) {
    switch (component_name) {
      case Components.SETTINGS:
        // return SettingsView
        return <SettingsView/>

      case Components.READER_VIEW:
        // return ReaderView
        return <ReaderView/>

      // SEARCH_RESULTS, HOME, #allCategories
      default:
        // return ContentView
        return <ContentView/>
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
    const { isLoading } = store.getState().news;
    return (
      <div className='App'>
        <div id='left' ref='Sidebar'>
          <SideBar
            sections={sideBarSectionsExampleData}
          />
        </div>
        <div id='right'>
          <NavigationBar
            collapseSidebar={this.collapseSidebar.bind(this)}
          />
          <Switch>
        {
          (isLoading) ?
          <div className='loading-view'>
            <ReactLoading
              className='loading-view_spinner'
              width={'2.5em'}
              height={'2.5em'}
              type={"spokes"}
              color={"gray"}
            />
          </div>
          :

          this.routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  children={<route.component/>}
                />
              ))
            } 
          </Switch>
        </div>
      </div>
    );
  }

}

export default AppBase;