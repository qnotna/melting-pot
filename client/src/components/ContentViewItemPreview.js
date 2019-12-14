import React, { Component } from 'react';
import '../stylesheets/ContentViewItemPreview.css';

class ContentViewItemPreview extends Component {

  render() {
    let item = this.props.item;
    let previewSize = this.props.previewSize;

    return(
      <div className='preview-with-image' preview-size={previewSize}>
        <img className='preview-image' src={item.urlToImage} alt={item.title}/>
        <p className='unread-mark'>NEW</p>
        <div className='preview-information'>
          <div className='preview-information-publisher'>
            <img className='icon' src='https://www.bevlabvet.com/images/circle-dark.png' alt='Publisher logo' />
            <p className='preview-information-publisher-name'>{item.source.name}</p>
            <p className='preview-information-publisher-date'>{item.publishedAt}</p>
          </div>
          <div className='preview-information-reading-time'>
            <img className='icon' src='https://www.bevlabvet.com/images/circle-dark.png' alt='Reading Time' />
            {/* <p>{item.readingTime}</p> */}
          </div>
          <img className='preview-information-category icon' src='https://www.bevlabvet.com/images/circle-dark.png' alt='Category' />
        </div>
        <div className='preview-actions'>
          {/* TODO: Hier muss ein onClick event handler sein der den item + vollen (geparsten) content speichert! */}
          <button type='submit'>
            <img className='icon' src='https://www.bevlabvet.com/images/circle-dark.png' alt='Category' />
            Save offline
          </button>
          {/* TODO: Hier muss ein onClick event handler sein der die item spiechert! */}
          <button type='submit'>
            <img className='icon' src='https://www.bevlabvet.com/images/circle-dark.png' alt='Category' />
            Add to favorites
          </button>
        </div>
      </div>
    );
  }

}

export default ContentViewItemPreview;