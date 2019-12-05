import React, {Component, Fragment} from 'react';
import ContentViewItems from './ContentViewItems.js';

class ContentViewSections extends Component {

  getSectionKey = (section) => (`section-${section.type}`)
  getItemSize = (section) => ((section.type === 'horizontal') ? 'large' : 'small')

  render() {
    return this.props.sections.map((section) => (
      <Fragment key={section.id}>
        <h1 className='content-view-section-title'>{section.title}</h1>
        <div className='content-view-section' type={section.type}>
          <ContentViewItems items={section.items} size={this.getItemSize(section)}/>
        </div>
      </Fragment>
    ));
  }

}

export default ContentViewSections;