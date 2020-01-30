import React from 'react';
import ActionButton from './simple/ActionButton';
import ReadingTime from './simple/ReadingTime';
import Source from './simple/Source';
import TextBlock from './simple/TextBlock';
import '../stylesheets/ReaderView.css';
import store from '../store';
import calcReadingTime from '../utils/readingTimeCalc';
import formatDate from '../utils/dateFormatter';

// Link zum Bild: https://privateflite.com/assets/global/img/image-not-found-dark.png

const ReaderView = () => {
  const article = store.getState().news.current_article;
  return(
    <div id='reader-view'>
      { String(article.urlToImage) !== 'null'
        ? <img 
            onError={(e) => e.target.src='http://localhost:3000/img/image-not-found-dark.png'} 
            src={article.urlToImage} 
            alt={article.description}
          />
        : <img 
            src='http://localhost:3000/img/image-not-found-dark.png' 
            alt={article.description}
          />
      }  
      <div id='reader-view-meta'>
        <div id='reader-view-meta-information'>
          <Source
            name={article.source.name}
            date={formatDate(article.publishedAt, 'reader')}
          />
          <ReadingTime time={calcReadingTime(article.content, 'reader')}/>
          {/* <ReadingTime time={15}/> */}
          <div>
            <ActionButton
              text='Zu Favoriten hinzufügen'
              type='add' 
              icon='favorite'
            />
            <ActionButton 
              text='Für später speichern'
              type='save' 
              icon='bookmark'
            />
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