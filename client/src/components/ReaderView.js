import React, {Component, Fragment} from 'react';
// import ContentViewItemPreview from './ContentViewItemPreview.js';
import '../stylesheets/ReaderView.css';

class ReaderView extends Component {


  createText = (text) => {
    let paragraphs = text.split('\n');
    return paragraphs.map((paragraph) => (
      <Fragment key={paragraphs.indexOf(paragraph)}>
        <p>{paragraph}</p>
      </Fragment>
    ));
  }

  render() {
    let article = this.props.sections;
    return(
      <div id='reader-view'>
        <img src={article.content.imgSrc} alt={article.content.imgAlt}/>
        <div id='reader-view-meta'>
          <div/>
        </div>
        <div id='reader-view-content'>
          <h1>{article.content.title}</h1>
          <h3>{article.content.previewText}</h3>
          {this.createText(article.content.text)}
        </div>
      </div>
    );
  }

}

export default ReaderView;