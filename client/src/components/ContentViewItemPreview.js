import React from 'react';
import ActionButton from './simple/ActionButton';
import ReadingTime from './simple/ReadingTime';
import Source from './simple/Source';
import Badge from './simple/Badge';
import '../stylesheets/ContentViewItemPreview.css';

const ContentViewItemPreview = ({ item, previewSize }) => {

  return(
    <div className='preview-with-image' preview-size={previewSize}>
      <img className='preview-image' src={item.urlToImage} alt={item.title}/>
      <Badge/>
      <div className='preview-information'>
        <Source
          name={item.source.name}
          date={item.publishedAt}
          />
        <ReadingTime time={12}/>
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

export default ContentViewItemPreview;