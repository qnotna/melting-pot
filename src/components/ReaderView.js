import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import ReactLoading from 'react-loading';
import store from '../store';
import findTopics from "../utils/lda"
import { SET_LOCAL_STORAGE_ARTICLE } from '../actions/sessionActions'
import ReaderViewContent from './ReaderViewContent.js';
// const localStorage = require('store');
const storage = window.localStorage;

// @keydown
class ReaderView extends Component {

  onChange(type) {
    console.log(type);
  }

  render() {

    const { contentLoading } = store.getState().news;
    const current_article = this.state.current_article
    console.log(localStorage.get('session').local_storage_article)
    const paragraphs = current_article.paragraphs || []
    const rawParagraphs = current_article.rawParagraphs || []
    return (
      <div id='reader-view'>
        <img
          id='reader-view_image'
          src={current_article.urlToImage}
          alt={current_article.description}
        />
        {
          contentLoading ?
          <div id='reader-view_loading'>
            <ReactLoading
              className='loading-view_spinner'
              width={'2.5em'}
              height={'2.5em'}
              type={"spokes"}
              color={"gray"}
              />
          </div>
          :
          <ReaderViewContent
            article={current_article}
            paragraphs={paragraphs}
            rawParagraphs={paragraphs}
            onValueChange={this.onChange}
          />
        }
      </div>

    );
  }
}

export default withRouter(ReaderView);