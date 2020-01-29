import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactLoading from 'react-loading';
import { Switch, Route } from 'react-router';


import ContentView from './ContentView.js';
import NavigationBar from './NavigationBar.js';
import SideBar from './SideBar.js';
import ReaderView from './ReaderView.js';
import SettingsView from './settings/SettingsView.js';

import sideBarSectionsExampleData from '../example/sideBarSections.json';

import api from '../utils/API';

import store from '../store'
import { setSections, addSection } from '../actions/newsActions'

import { Components } from '../utils/Components';

import '../../node_modules/material-design-icons/iconfont/material-icons.css'

class AppBase extends Component {
  routes = [
    {
        path: "/",
        component: () => <ContentView/>
    },
    {
        path: "/business",
        component: () => <ContentView/>
    },
    {
        path: "/entertainment",
        component: () => <ContentView/>
    },
    {
        path: "/health",
        component: () => <ContentView/>
    },
    {
        path: "/science",
        component: () => <ContentView/>
    },
    {
        path: "/sports",
        component: () => <ContentView/>
    },
    {
        path: "/tecnology",
        component: () => <ContentView/>
    },
    {
        path: "/settings",
        component: () => <SettingsView/>
    },
    {
        path: "/home",
        component: () => <ContentView/>
    },
    {
        path: "/reader-view",
        component: () => <ReaderView/>
    }
];
  isCollapsed = false;

  collapseSidebar = (event) => {
    this.isCollapsed = !this.isCollapsed;
    let sideBar = ReactDOM.findDOMNode(this.refs.Sidebar)
    sideBar.setAttribute('collapsed', this.isCollapsed.toString());
    document.getElementById('right').setAttribute('collapsed', this.isCollapsed.toString());
  }

  loadSearchResultSections(){
    const input = store.getState().news.search_input
    api.getSearchResults((res) => {
      store.dispatch( setSections ( res ))
    }, input)
  }

  // Given a name return coresponding component
  getComponentByName(component_name) {
    switch (component_name) {
      case Components.SETTINGS:
        return <SettingsView/>

      case Components.READER_VIEW:
        return <ReaderView/>

      // SEARCH_RESULTS, HOME, #allCategories
      default:
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
    const { content_component, isLoading } = store.getState().news;

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

          // <Switch>
          //   {this.routes.map((route, index) => (
          //     // Render more <Route>s with the same paths as
          //     // above, but different components this time.
          //     <Route
          //       key={index}
          //       path={route.path}
          //       children={<route.component />}
          //     />
          //   ))}
          // </Switch>
          this.getComponentByName(content_component)
        }
        </div>
      </div>
    );
  }

}

export default AppBase;