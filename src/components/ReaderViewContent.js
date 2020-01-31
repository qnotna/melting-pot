import React, { Fragment, useState } from 'react';
import Source from './simple/Source';
import TextBlock from './simple/TextBlock';
import ReadingTime from './simple/ReadingTime';
import calcReadingTime from '../utils/readingTimeCalc';
import formatDate from '../utils/dateFormatter';
import ActionButton from './simple/ActionButton';
import FakeNewsCheck from './FakeNewsCheck';

const ReaderViewContent = ({ article, paragraphs, rawParagraphs }) => {

  const [checked, setChecked] = useState(false);
  let word = 'show';

  const onCheckboxChange = (value) => {
    word = value ? 'show' : 'hide'
    setChecked(value);
  }

  let actualParagraphs = article.hasContentBeenParsed ? paragraphs : []
  actualParagraphs = checked ? rawParagraphs : actualParagraphs

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
        <a href={article.url} target="_blank">
          {article.title}
        </a>
        <h3>
          {article.description}
        </h3>
        <p id='reader-view_author'>
          {`By ${article.author}`}
        </p>
        <div id='reader-view_content_check_item'>
        </div>
          <FakeNewsCheck data={article.insides || []}/>
          <br/><hr/><br/>
        <div id='reader-view_content_container'>
          <label for='reader-view_content_container_input'>
            {
              article.hasContentBeenParsed ?
              `✅ This article has been melted successfully. Click to ${word} raw content anyway` :
              `⚠️ This article can not be melted! Click to ${word} raw content anyway`
            }
          </label>
          <input
            id='reader-view_content_container_input'
            defaultChecked={false}
            type='checkbox'
            onChange={(event) => {onCheckboxChange(event.target.checked)}}
            />
        </div>
        <TextBlock paragraphs={actualParagraphs}/>
      </div>
    </Fragment>
  );

};

export default ReaderViewContent;