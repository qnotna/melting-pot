import React from 'react';
import ActionButton from './simple/ActionButton';
import ReadingTime from './simple/ReadingTime';
import Source from './simple/Source';
import TextBlock from './simple/TextBlock';
import '../stylesheets/ReaderView.css';
import store from '../store';

const ReaderView = () => {
  const article = store.getState().current_article;
  return(
    <div id='reader-view'>
      <img src={article.urlToImage} alt={article.description}/>
      <div id='reader-view-meta'>
        <div id='reader-view-meta-information'>
          <Source
            name={article.source.name}
            date={article.published}
          />
          <ReadingTime time={15}/>
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
        <TextBlock text={article.content}/>
      </div>
    </div>
  );

}

export default ReaderView;