import React, {Component, Fragment} from 'react';
import ContentViewItemPreview from './ContentViewItemPreview.js';

class ContentViewItems extends Component {

  // TODO: optionalPreviewText in die ContentViewItemPreview verschieben
  createItemPreview = (item) => {
    let previewSize = this.props.previewSize;
    let optionalPreviewText = <Fragment/>;
    if (previewSize === 'large') {
      optionalPreviewText = <p>{item.description}</p>
    }
    return(
      <div className='content-view-preview' preview-size={previewSize}>
        <ContentViewItemPreview item={item} previewSize={previewSize}/>
        <h3>{item.title}</h3>
        {optionalPreviewText}
      </div>
    );
  }

  render() {
    // console.log(this.props)
    return this.props.articles.map((article, index) => (
      <div className='content-view-item' preview-size={this.props.previewSize} key={index}>
        {this.createItemPreview(article)}
      </div>
    ));
  }

}

export default ContentViewItems;