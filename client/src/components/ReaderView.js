import React from 'react';
import ActionButton from './simple/ActionButton';
import ReadingTime from './simple/ReadingTime';
import Source from './simple/Source';
import TextBlock from './simple/TextBlock';
import '../stylesheets/ReaderView.css';
import store from '../store';
import calcReadingTime from '../utils/readingTimeCalc';
import formatDate from '../utils/dateFormatter';
import findTopics from "../utils/lda"

const ReaderView = () => {
  const article = store.getState().news.current_article;

  const topics = findTopics([article.title, article.description, article.content], article.paragraphs)
  console.log(topics)

  return(
    <div id='reader-view'>
      <img src={article.urlToImage} alt={article.description}/>
      <div id='reader-view-meta'>
        <div id='reader-view-meta-information'>
          <Source
            name={article.source.name}
            date={formatDate(article.publishedAt, 'reader')}
          />
          <ReadingTime time={calcReadingTime(article.content, 'reader')}/>
          {/* <ReadingTime time={15}/> */}
          <div>
            <ActionButton type='add'/>
            <ActionButton type='save'/>
          </div>
        </div>
      </div>
      <div id='reader-view-content'>
        <h1>{article.title}</h1>
        <h3>{article.description}</h3>
        <p id='reader-view-author'>{`By ${article.author}`}</p>
        {/* <a href={article.url}>Link to Original</a> */}
        <TextBlock paragraphs={article.paragraphs}/>
      </div>
    </div>
  );

}

export default ReaderView;