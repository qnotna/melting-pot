import React, {Component} from 'react';
import ContentViewSections from './ContentViewSections.js';
import ContentViewTags from './ContentViewTags.js';
import store from '../store.js';

class ContentView extends Component {

  render() {
    const { sections, sectionTags } = store.getState().news
    localStorage.setItem('settings', JSON.stringify(store.getState().settings))

    return(
      <div id='content-view'>
        <ul id='tags'>
          <ContentViewTags tags={sectionTags}/>
        </ul>
        <ContentViewSections sections={sections}/>
      </div>
    );
  }

}

export default ContentView;