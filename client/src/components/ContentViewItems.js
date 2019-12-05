import React, {Component, Fragment} from 'react';
import ContentViewItemPreview from './ContentViewItemPreview.js';

class ContentViewItems extends Component {

  createItemPreview = (item) => {
    let size = this.props.size;
    let optionalPreviewText = <Fragment/>;
    if (size === 'large') {
      optionalPreviewText = <p>{item.previewText}</p>
    }
    return(
      <div className='content-view-preview' preview-size={size}>
        <ContentViewItemPreview item={item} size={size}/>
        <h3>{item.title}</h3>
        {optionalPreviewText}
      </div>
    );
  }

  render() {
    return this.props.items.map((item) => (
      <div className='content-view-item' preview-size={this.props.size} key={item.title}>
        {this.createItemPreview(item)}
      </div>
    ));
  }

}

export default ContentViewItems;