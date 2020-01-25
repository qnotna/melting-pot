import React, { Component, Fragment } from 'react';
import ContentViewItems from './ContentViewItems.js';

class ContentViewSections extends Component {
  getSectionKey = (section) => (`section-${section.type}`)
  getItemSize = (section) => ((section.type === 'horizontal') ? 'large' : 'small')

  handleClick(event) {
    let isNext = (event.target.innerHTML === 'Next') ? true : false;
    if(isNext) {
      
    }
    else {

    }
  }

  render() {
    // console.log(this.props.sections)
    return this.props.sections.map((section, index) => (
      <Fragment key={index}>
        <h1 className='content-view-section-title'>{section.name}</h1>
        <div className='content-view-section' type={section.type}>
          <ContentViewItems articles={section.articles} previewSize={this.getItemSize(section)}/>
        </div>
        <div className='btn-container'>
          <button type="button" onClick={(event) => this.handleClick(event)}>Previous</button>
          <button type="button" onClick={(event) => this.handleClick(event)}>Next</button>
        </div>
      </Fragment>
    ));
  }

}

export default ContentViewSections;