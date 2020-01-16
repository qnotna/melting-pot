import React, { Component } from 'react';
import ActionButton from './simple/ActionButton';
import ReadingTime from './simple/ReadingTime';
import Source from './simple/Source';
import Badge from './simple/Badge';
import '../stylesheets/ContentViewItemPreview.css';
import calcReadingTime from '../utils/readingTimeCalc';
import formatDate from '../utils/dateFormatter';

class ContentViewItemPreview extends Component {

  render() {
    let item =  this.props.item;
    let previewSize =  this.props.previewSize;
    return(
      <div className='preview-with-image' preview-size={previewSize}>
        <img className='preview-image' src={item.urlToImage} alt={item.title}/>
        <Badge/>
        <div className='preview-information'>
          <Source
            name={item.source.name}
            date={formatDate(item.publishedAt, 'preview')}
            />
          <ReadingTime time={calcReadingTime(item.content, 'preview')}/>
          {/* <ReadingTime time={12}/> */}
          <img className='preview-information-category icon' src='https://www.bevlabvet.com/images/circle-dark.png' alt='Category' />
        </div>
        <div className='preview-actions'>
          <ActionButton
            text='Zu Favoriten hinzufügen'
            type='add'
          />
          <ActionButton
            text='Für später speichern'
            type='save'
          />
        </div>
      </div>
    );
  }
}

export default ContentViewItemPreview;