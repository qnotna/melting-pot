import React, {Component, Fragment} from 'react';
import ContentViewItemPreview from './ContentViewItemPreview.js';
import store from '../store.js';
import { setArticle, setContentComponent } from '../actions'
import { Components } from '../utils/Components.js';

class ContentViewItems extends Component {

  showRenderView(article){
    store.dispatch(setArticle(article));
    store.dispatch(setContentComponent(Components.READER_VIEW))
    // console.log(store.getState());
    // console.log(article);
  }

  // TODO: optionalPreviewText in die ContentViewItemPreview verschieben
  createItemPreview = (item) => {
    let previewSize = this.props.previewSize;
    let optionalPreviewText = <Fragment/>;
    if (previewSize === 'large') {
      optionalPreviewText = <p>{item.description}</p>
    }
    return(
      <div className='content-view-preview' preview-size={previewSize} onClick={() => this.showRenderView(item)}>
        <ContentViewItemPreview item={item} previewSize={previewSize}/>
        <h3>{item.title}</h3>
        {optionalPreviewText}
      </div>
    );
  }

  render() {
    return this.props.articles.map((article, index) => (
      <div
        className='content-view-item'
        preview-size={this.props.previewSize}
        key={index}
      >
        {this.createItemPreview(article)}
      </div>
    ));
  }

}

export default ContentViewItems;