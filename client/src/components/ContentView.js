import React, {Component} from 'react';
import ContentViewSections from './ContentViewSections.js';
import ContentViewTags from './ContentViewTags.js';
import '../stylesheets/ContentView.css';

class ContentView extends Component {



  render() {
    // console.log(this.props)

    return(

      <div id='content-view'>
        <div id='content-view-scrollbar'>
          <ul id='content-view-tags'>
            <ContentViewTags tags={this.props.tags}/>
          </ul>
          {/* {this.props.sections.data != undefined &&  */}
            <ContentViewSections sections={this.props.sections}/>
          {/* } */}
        </div>
      </div>
    );
  }

}

export default ContentView;