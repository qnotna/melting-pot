import React, { Component, Fragment } from 'react';
import ContentViewItems from './ContentViewItems.js';
import Pagination from './Pagination.js';
import NoContent from './NoContent.js';

class ContentViewSections extends Component {
  getSectionKey = (section) => (`section-${section.type}`)
  getItemSize = (section) => ((section.type === 'horizontal') ? 'large' : 'small')

  render() {
    return this.props.sections.map((section, index) => (
      <Fragment key={index}>
      {section.error ?
        <NoContent errorData={section.error.response.data.error}/>
        :
        <Fragment>
        <Pagination
          sectionName={section.name}
          totalresults={section.totalResults}
          currentResults={section.articles.length}
        />
        <h1 className='section-title'>{section.name}</h1>
        <div className='section' type={section.type}>
            <ContentViewItems articles={section.articles} previewSize={this.getItemSize(section)}/>
        </div>
        <Pagination
          sectionName={section.name}
          totalresults={section.totalResults}
          currentResults={section.articles.length}
        />
        </Fragment>
      }
      </Fragment>
    ));
  }

}

export default ContentViewSections;