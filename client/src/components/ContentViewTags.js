import React, {Component} from 'react';

class ContentViewTags extends Component {

  render() {
    return this.props.tags.map((tag) => (
      <li className='tag' key={this.props.tags.indexOf(tag)}>
        <p>{tag}</p>
      </li>
    ));
  }

}

export default ContentViewTags;