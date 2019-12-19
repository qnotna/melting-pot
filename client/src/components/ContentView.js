import React, {Component} from 'react';
import ContentViewSections from './ContentViewSections.js';
import ContentViewTags from './ContentViewTags.js';
import '../stylesheets/ContentView.css';

// Placeholder data
import contentViewTagsExampleData from '../example/contentViewTags.json';
import store from '../store.js';
import { addSection } from '../actions/index.js';

import api from '../utils/API';



class ContentView extends Component {

  componentDidMount() {
    console.log("Component mount")

    api.getHot((res) => {
      store.dispatch( addSection ( res ))
    })
    api.getLatest((res) => {
      store.dispatch( addSection( res ))
    })
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