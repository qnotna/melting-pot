import React, {Component} from 'react';
import ContentViewSections from './ContentViewSections.js';
import ContentViewTags from './ContentViewTags.js';
import ContentViewResults from './ContentViewResults';
import '../stylesheets/ContentView.css';

// DarkMode
import '../stylesheets/DarkMode.css';

// Placeholder data
import contentViewTagsExampleData from '../example/contentViewTags.json';

// Redux
import store from '../store.js';



class ContentView extends Component {
  componentDidMount = () => {
    if(store.getState().darkMode) {
      document.getElementById('content-view').classList.add('darkMode-content-view');

      var childNodeOfIdContentViewTags = document.getElementById('content-view-tags').childNodes;

      for(var i = 0; i < childNodeOfIdContentViewTags.length; i++) {
        childNodeOfIdContentViewTags[i].classList.add('darkMode-content-view-tags');
      }
    }
  }

  render() {
    const { sections } = store.getState()

    return(
      <div id='content-view'>
        <div id='content-view-scrollbar'>
          <ul id='content-view-tags'>
            <ContentViewTags tags={contentViewTagsExampleData}/>
          </ul>
            <ContentViewSections sections={sections}/>
        </div>
      </div>
    );
  }

}

export default ContentView;