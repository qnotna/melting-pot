import React, {Component} from 'react';
import ContentViewSections from './ContentViewSections.js';
import ContentViewTags from './ContentViewTags.js';
import ContentViewResults from './ContentViewResults.js';
import store from '../store.js';
import '../stylesheets/ContentView.css';
import '../stylesheets/DarkMode.css';
import { Scrollbars } from 'react-custom-scrollbars';

// Placeholder data
import contentViewTagsExampleData from '../example/contentViewTags.json';

class ContentView extends Component {
  handleDarkMode = () => {
    if(document.getElementById('content-view') !== null) {
      if(store.getState().darkMode) {
        document.getElementById('content-view').classList.add('darkMode-content-view');

        var childNodeOfIdContentViewTags = document.getElementById('content-view-tags').childNodes;

        for(var i = 0; i < childNodeOfIdContentViewTags.length; i++) {
          childNodeOfIdContentViewTags[i].classList.add('darkMode-content-view-tags');
        }
      }
    }
  }

  componentDidMount = () => {
    this.handleDarkMode();
  }

  render() {
    this.handleDarkMode();
    
    const { sections } = store.getState()

    return(
      <div id='content-view'>
        <Scrollbars>
          <div id='content-view-scrollbar'>
            <ul id='content-view-tags'>
              <ContentViewTags tags={contentViewTagsExampleData}/>
            </ul>
              <ContentViewSections sections={sections}/>
          </div>
        </Scrollbars>
      </div>
    );
  }

}

export default ContentView;