import React, {Component} from 'react';
import ContentViewSections from './ContentViewSections.js';
import ContentViewTags from './ContentViewTags.js';
import store from '../store.js';

// Placeholder data
import contentViewTagsExampleData from '../example/contentViewTags.json';

class ContentView extends Component {

  render() {
    // localStorage.setItem('session', JSON.stringify(store.getState().news.current_article))
    const { sections } = store.getState().news

    return(
      <div id='content-view'>
        <ul id='tags'>
          <ContentViewTags tags={contentViewTagsExampleData}/>
        </ul>
        <ContentViewSections sections={sections}/>
      </div>
    );
  }

}

export default ContentView;