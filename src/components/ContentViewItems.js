import React, { Component, Fragment } from 'react';
import store from '../store.js';
import { setArticle, setContentComponent, setContentLoadingState } from '../actions/newsActions'
import { Components } from '../utils/Components.js';
import contentParser from '../utils/contentParser';
import { Link } from 'react-router-dom';
import ArticlePreview from '../components/article/ArticlePreview.js';

class ContentViewItems extends Component {

  parseArticleContent(article) {
    contentParser(article.url, article.content, article.description, (parsedContent) => {
      article.paragraphs = parsedContent.paragraphs
      article.rawParagraphs = parsedContent.rawParagraphs
      store.dispatch(setContentLoadingState(false))
      store.dispatch(setArticle(article));
      store.dispatch(setContentComponent(Components.READER_VIEW))
    })
  }

  showRenderView(article) {
    store.dispatch(setArticle(article));
    store.dispatch(setContentComponent(Components.READER_VIEW))
    store.dispatch(setContentLoadingState(true))
    this.parseArticleContent(article)
  }

  render() {
    return this.props.articles.map((article, index) => (
      <div
        className='article'
        preview-size={this.props.previewSize}
        key={index}
      >
        <Link to='/reader-view'>
          <div className='article_preview' onClick={() => this.showRenderView(article)}>
            <ArticlePreview
              article={article} previewSize={this.props.previewSize}
            />
          </div>
        </Link>
      </div>
    ));
  }

}

export default ContentViewItems;