import React, {Component} from 'react';

class ContentViewItems extends Component {

  createItem = (item) => {
    let size = this.props.size;
    if (size === 'large') {
      return(
        <div className='content-view-preview' preview-size={size}>
          <div className='preview-with-image' preview-size={size}>
            <p>{item.publisher}</p>
            <p>{item.date}</p>
            <p>{item.readingTime}</p>
          </div>
          <h3>{item.title}</h3>
          <p>{item.previewText}</p>
        </div>
      );
    }
    return(
      <div className='content-view-preview' preview-size={size}>
        <div className='preview-with-image' preview-size={size}>
        </div>
        <h4>{item.title}</h4>
      </div>
    );
  }

  render() {
    return this.props.items.map((item) => (
      <div className='content-view-item' preview-size={this.props.size} key={item.title}>
        {this.createItem(item)}
      </div>
    ));
  }

}

export default ContentViewItems;