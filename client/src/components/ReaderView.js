import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ActionButton from './simple/ActionButton';
import ReadingTime from './simple/ReadingTime';
import Source from './simple/Source';
import TextBlock from './simple/TextBlock';
import store from '../store';
import calcReadingTime from '../utils/readingTimeCalc';
import formatDate from '../utils/dateFormatter';
import '../stylesheets/ReaderView.css';
import findTopics from "../utils/lda"

class ReaderView extends Component {
  render() {
    const article = store.getState().news.current_article;
    console.log(article)
    return (
      <div id='reader-view'>
        <img src={article.urlToImage} alt={article.description} />
        <div id='reader-view-meta'>
          <div id='reader-view-meta-information'>
            {/* <button onClick={() => this.props.history.goBack()} hidden={this.isHidden}>{'< Back'}</button>  */}
            <Source
              name={article.source.name}
              date={formatDate(article.publishedAt, 'reader')}
            />
            <ReadingTime time={calcReadingTime(article.paragraphs, 'reader')} />
            <div>
              <ActionButton type='add' />
              <ActionButton type='save' />
            </div>
          </div>
        </div>
        <div id='reader-view-content'>
          <h1>{article.title}</h1>
          <h3>{article.description}</h3>
          <p id='reader-view-author'>{`By ${article.author}`}</p>
          <a href={article.url}>Link to Original</a>
          <TextBlock paragraphs={article.paragraphs} />
        </div>
      </div>
  );
  }
}

export default withRouter(ReaderView);