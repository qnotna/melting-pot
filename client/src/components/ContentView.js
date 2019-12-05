import React, {Component} from 'react';
import ContentViewSections from './ContentViewSections.js';
import ContentViewTags from './ContentViewTags.js';
import '../stylesheets/ContentView.css';

class ContentView extends Component {

  render() {
    return(
      <div id='content-view'>
        <ul id='content-view-tags'>
          <ContentViewTags tags={this.props.tags}/>
        </ul>
        <ContentViewSections sections={this.props.sections}/>
      </div>
    );
  }

}

export default ContentView;