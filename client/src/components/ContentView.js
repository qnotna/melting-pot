import React, {Component} from 'react';
import ContentViewSections from './ContentViewSections.js';
import ContentViewTags from './ContentViewTags.js';
import ContentViewResults from './ContentViewResults';
import '../stylesheets/ContentView.css';

class ContentView extends Component {
  state = {
    hasResults: false
  }


  render() {
    // console.log(this.props.sections.map((section) => {
    //   if(section.name === "Result") {
    //     return section;
    //   }
    //   return;
    // }));
    console.log(this.props.sections);

    return(

      <div id='content-view'>
        <ul id='content-view-tags'>
          <ContentViewTags tags={this.props.tags}/>
        </ul>
        {/* {
          this.state.hasResults ? (
              <ContentViewResults results={this.props.results}/>
            ) : (
              )
            } */}
            <ContentViewSections sections={this.props.sections}/>
        
      </div>
    );
  }

}

export default ContentView;