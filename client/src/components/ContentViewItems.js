import React, {Component, Fragment} from 'react';
import ContentViewItemPreview from './ContentViewItemPreview.js';
import store from '../store.js';
import { setArticle, setContentComponent, setSections, setLoadingState } from '../actions/newsActions'
import { Components, clearContentView } from '../utils/Components.js';
import contentParser from '../utils/contentParser'

class ContentViewItems extends Component {

  parseArticleContent(article){
    contentParser(article.url, article.content, article.description, (articleParagraphs) => {
      article.paragraphs = articleParagraphs
      store.dispatch(setArticle(article));
      store.dispatch(setContentComponent(Components.READER_VIEW))
    })
  }

  showRenderView(article){
    article.paragraphs = [];

    store.dispatch(setArticle(article));
    store.dispatch(setContentComponent(Components.READER_VIEW))

    this.parseArticleContent(article)
  }

  // TODO: optionalPreviewText in die ContentViewItemPreview verschieben
  createItemPreview = (item) => {
    let previewSize = this.props.previewSize;
    let optionalPreviewText = <Fragment/>;
    if (previewSize === 'large') {
      optionalPreviewText = item.description
    }
    return(
      <div className='article_preview' preview-size={previewSize} onClick={() => this.showRenderView(item)}>
        <ContentViewItemPreview item={item} previewSize={previewSize}/>
        <h3>{item.title}</h3>
        <p className='preview-text'>{optionalPreviewText}</p>
      </div>
    );
  }

  render() {
    return this.props.articles.map((article, index) => (
      <div
        className='article'
        preview-size={this.props.previewSize}
        key={index}
      >
        {this.createItemPreview(article)}
      </div>
    ));
  }

}

export default ContentViewItems;