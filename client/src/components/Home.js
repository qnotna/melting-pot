import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../stylesheets/App.css';

import ContentView from './ContentView.js';
import NavigationBar from './NavigationBar.js';
import SideBar from './SideBar.js';
// import ReaderView from './components/ReaderView.js';

import userExampleData from '../example/user.json';
import sideBarSectionsExampleData from '../example/sideBarSections.json';
import contentViewSectionsExampleData from '../example/contentViewSections.json';
import contentViewTagsExampleData from '../example/contentViewTags.json';
// import readerViewArticleExampleData from './example/readerViewArticle.json';

import Axios from 'axios';
import { callbackify } from 'util';

class Home extends Component {

  isCollapsed = false;
  collapseSidebar = (event) => {
    this.isCollapsed = !this.isCollapsed;
    let sideBar = ReactDOM.findDOMNode(this.refs.Sidebar)
    sideBar.setAttribute('collapsed', this.isCollapsed.toString());
  }

  test(){
    Axios.get("http://localhost:5000/newsapi/top-headlines",  {
        country: "de"
    })
    .then(
        res => {
            console.log(res)
            }
    )
    .catch(
        err => console.log(err)
    )
  }

  render() {
      this.test()
      
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
          {/* <ContentView
            sections={this.state.topHeadlines}
            tags={contentViewTagsExampleData}
            /> */}
          {
            // <ReaderView
            //   article={this.article}
            // />
          }
        </div>
      </div>
    );
  }

}

export default Home;