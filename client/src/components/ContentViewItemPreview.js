import React, { Component } from 'react';
import '../stylesheets/ContentViewItemPreview.css';

class ContentViewItemPreview extends Component {

  render() {
    let item = this.props.item;
    let previewSize = this.props.previewSize;
    // let src = 'https://static01.nyt.com/images/2019/11/06/us/06mormon-kids01alt/06mormon-kids01alt-superJumbo.jpg?quality=90&auto=webp';
    // let alt = 'Relatives of a family killed in an ambush looked through the burnt wreckage of one of the vehicles that had been carrying them in Bavispe, Mexico.';
    return (
      <div className='preview-with-image' preview-size={previewSize}>
        {
          //<img preview-size={previewSize} src={src} alt={alt}/>
        }
        <p className='unread-mark'>NEW</p>
        <div className='preview-information'>
          <div className='preview-information-publisher'>
            <img src='https://www.bevlabvet.com/images/circle-dark.png' alt='Publisher logo' />
            <p className='preview-information-publisher-name'>{item.source.name}</p>
            <p className='preview-information-publisher-date'>{item.publishedAt}</p>
          </div>
          <div className='preview-information-reading-time'>
            <img src='https://www.bevlabvet.com/images/circle-dark.png' alt='Reading Time' />
            {/* <p>{item.readingTime}</p> */}
          </div>
          <img className='preview-information-category' src='https://www.bevlabvet.com/images/circle-dark.png' alt='Category' />
        </div>
        <div className='preview-actions'>
          {/* TODO: Hier muss ein onClick event handler sein der den item + vollen (geparsten) content speichert! */}
          <button type='submit'>
            <img src='https://www.bevlabvet.com/images/circle-dark.png' alt='Category' />
            Save offline
          </button>
          {/* TODO: Hier muss ein onClick event handler sein der die item spiechert! */}
          <button type='submit'>
            <img src='https://www.bevlabvet.com/images/circle-dark.png' alt='Category' />
            Add to favorites
          </button>
        </div>
      </div>
    );
  }

}

export default ContentViewItemPreview;