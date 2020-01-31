import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import ReactLoading from 'react-loading';
import keydown from 'react-keydown';

import ActionButton from './simple/ActionButton';
import ReadingTime from './simple/ReadingTime';
import Source from './simple/Source';
import TextBlock from './simple/TextBlock';
import store from '../store';
import calcReadingTime from '../utils/readingTimeCalc';
import formatDate from '../utils/dateFormatter';
import '../stylesheets/ReaderView.css';
import findTopics from "../utils/lda"
import { SET_LOCAL_STORAGE_ARTICLE } from '../actions/sessionActions'
const localStorage = require('store');
const storage = window.localStorage;

// @keydown
class ReaderView extends Component {
  constructor(props) {
    super(props);
    if (window.performance) {
      if (performance.navigation.type == 1) {
        this.setState({
          current_article: localStorage.set("session", SET_LOCAL_STORAGE_ARTICLE(this.state.current_article))
        }, this.props.history.push('/reader-view'))
      } else {
        alert( "This page is not reloaded");
      }
    }
  }
  state = {
    current_article: localStorage.get('session').local_storage_article ? localStorage.get('session').local_storage_article : store.getState().news.current_article
  }


  // handleKeyEvent = (event) => {
  //   event.preventDefault();
  //   console.log(event)
  // }

  // componentDidMount() {

  //   console.log(storage)
  //   localStorage.set("session", SET_LOCAL_STORAGE_ARTICLE(this.state.current_article))
  // }

  render() {

    const { contentLoading } = store.getState().news;
    const current_article = this.state.current_article
    console.log(localStorage.get('session').local_storage_article)
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
              <a href={current_article.url}>Link to Original</a>
              <TextBlock paragraphs={paragraphs} />
            </div>
          </Fragment>
          }
      </div>

  );
  }
}

export default withRouter(ReaderView);