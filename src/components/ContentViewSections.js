import React, { Component, Fragment } from 'react';
import ContentViewItems from './ContentViewItems.js';
import Pagination from './Pagination.js';
import NoContent from './NoContent.js';

class ContentViewSections extends Component {
  getSectionKey = (section) => (`section-${section.type}`)
  getItemSize = (section) => ((section.type === 'horizontal') ? 'large' : 'small')

  filterArticles(articles) {
    const unique = articles.map(article => article["url"])
    // store index of the unique objects
    .map((url, index, currentUrl) => currentUrl.indexOf(url) === index && index)
    // eliminate the dead keys & store unique objects
    .filter(index => articles[index])
    .map(e => articles[e]);

    return unique;
  }

  render() {
    return this.props.sections.map((section, index) => (
      <Fragment key={index}>
      {section.error ?
        <NoContent errorData={section.error}/>
        :
        section.articles.length !== 0 ?
        <Fragment>
        <Pagination
          sectionName={section.name}
          totalresults={section.totalResults}
          currentResults={section.articles.length}
        />
        <h1 className='section-title'>{section.name}</h1>
        <div className='section' type={section.type}>
            <ContentViewItems articles={this.filterArticles(section.articles)} previewSize={this.getItemSize(section)}/>
        </div>
        <Pagination
          sectionName={section.name}
          totalresults={section.totalResults}
          currentResults={section.articles.length}
        />
        </Fragment>
        :
        <NoContent errorData={{message: "No Results"}}/>
      }
      </Fragment>
    ));
  }

}

export default ContentViewSections;