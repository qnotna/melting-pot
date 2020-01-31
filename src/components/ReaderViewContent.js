import React, { Fragment, useState } from 'react';
import Source from './simple/Source';
import TextBlock from './simple/TextBlock';
import ReadingTime from './simple/ReadingTime';
import calcReadingTime from '../utils/readingTimeCalc';
import formatDate from '../utils/dateFormatter';
import ActionButton from './simple/ActionButton';

const ReaderViewContent = ({ article, paragraphs, rawParagraphs, onValueChange }) => {

  const [shouldShowRaw, setShowRaw] = useState(false);

  const onCheckboxChange = (value) => {
    setShowRaw(value);
    onValueChange(shouldShowRaw);
  }

  return(
    <Fragment>
      <div id='reader-view_meta'>
        <ul id='reader-view_meta_information_left'>
          <li>
            <Source
              name={article.source.name}
              date={formatDate(article.publishedAt, 'reader')}
              />
          </li>
        </ul>
        <ul id='reader-view_meta_information_right'>
          <li>
            <ReadingTime
              time={calcReadingTime(article.paragraphs, 'reader')}
              />
          </li>
          <li id='reader-view_meta_actions'>
            <ActionButton type='add'/>
            <ActionButton type='save'/>
          </li>
        </ul>
      </div>
      <div id='reader-view_content'>
        <a href={article.url}>
          {article.title}
        </a>
        <h3>
          {article.description}
        </h3>
        <p id='reader-view_author'>
          {`By ${article.author}`}
        </p>
        <div id='reader-view_content_container'>
          <label for='reader-view_content_container_input'>
            {
              shouldShowRaw ?
              '⚠️ This Article Can Not Be Melted. Show Raw Content (Low Quality)' :
              '⚠️ This Article Has Been Melted. Hide Raw Content (Low Quality)'
            }
          </label>
          <input
            id='reader-view_content_container_input'
            defaultChecked={false}
            type='checkbox'
            onChange={(event) => {onCheckboxChange(event.target.checked)}}
          />
        </div>
        {
          shouldShowRaw === false ? <TextBlock paragraphs={paragraphs}/> : <TextBlock paragraphs={[]}/>
        }
      </div>
    </Fragment>
  );

};

export default ReaderViewContent;