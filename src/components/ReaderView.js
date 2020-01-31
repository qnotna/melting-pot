import React, { Component, Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import ReactLoading from 'react-loading';

import ActionButton from './simple/ActionButton';
import ReadingTime from './simple/ReadingTime';
import Source from './simple/Source';
import TextBlock from './simple/TextBlock';
import store from '../store';
import calcReadingTime from '../utils/readingTimeCalc';
import formatDate from '../utils/dateFormatter';
import '../stylesheets/ReaderView.css';
import findTopics from "../utils/lda"
import { setLocalStorageArticle } from '../actions/sessionActions'
// const localStorage = require('store');

class ReaderView extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillUnmount() {
    store.dispatch(setLocalStorageArticle(store.getState().news.current_article));
  }
  
  render() {
    const { contentLoading, current_article } = store.getState().news;
    // const article = localStorage.get('session').local_storage_article 
    localStorage.setItem('session', JSON.stringify(store.getState().news.current_article))

    console.log(current_article)
    // Wenn aktueller Artikel (aus store oder aus redux) gleich ist mit dem aus redux (bzw. der vom user angeklickt wurde)
    // if(current_article == local_storage_article){
    //   console.log("if")
    //   current_article = local_storage_article;
    // }
    // else {
    //   console.log("else")
    //   localStorage.set('session', setLocalStorageArticle(current_article));
    // }
    // console.log(current_article)
    const paragraphs = current_article.paragraphs || []
    // console.log(current_article)
    return (
      <div id='reader-view'>
        <img src={current_article.urlToImage} alt={current_article.description} />
          { contentLoading ?
          <ReactLoading 
          className='loading-view_spinner' 
          width={'2.5em'} 
          height={'2.5em'} 
          type={"spokes"} 
          color={"gray"} 
          />
          : 
          <Fragment>
            <div id='reader-view-meta'>
              <div id='reader-view-meta-information'>
                {/* <button onClick={() => this.props.history.goBack()} hidden={this.isHidden}>{'< Back'}</button>  */}
                <Source
                  name={current_article.source.name}
                  date={formatDate(current_article.publishedAt, 'reader')}
                />
                <ReadingTime time={calcReadingTime(current_article.paragraphs, 'reader')} />
                <div>
                  <ActionButton type='add' />
                  <ActionButton type='save' />
                </div>
              </div>
            </div>
            <div id='reader-view-content'>
              <h1>{current_article.title}</h1>
              <h3>{current_article.description}</h3>
              <p id='reader-view-author'>{`By ${current_article.author}`}</p>
              <a href={current_article.url} target="_blank">Link to Original</a>
              <TextBlock paragraphs={paragraphs} />
            </div>
          </Fragment>
          }
      </div>

  );
  }
}

export default withRouter(ReaderView);