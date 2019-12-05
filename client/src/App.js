import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/App.css';
import ContentView from './components/ContentView.js';
import NavigationBar from './components/NavigationBar.js';
import SideBar from './components/SideBar.js';
// import ReaderView from './components/ReaderView.js';

import userExampleData from './example/user.json';
import sideBarSectionsExampleData from './example/sideBarSections.json';
import contentViewSectionsExampleData from './example/contentViewSections.json';
import contentViewTagsExampleData from './example/contentViewTags.json';
// import readerViewArticleExampleData from './example/readerViewArticle.json';

class App extends Component {

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
          <SideBar
            sections={sideBarSectionsExampleData}
            user={userExampleData}
          />
        </div>
        <div id='right'>
          <NavigationBar
            collapseSidebar={this.collapseSidebar.bind(this)}
          />
          <ContentView
            sections={contentViewSectionsExampleData}
            tags={contentViewTagsExampleData}
            />
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

export default App;
