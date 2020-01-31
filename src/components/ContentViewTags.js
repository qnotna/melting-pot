import React, { Component } from 'react';
import { setInitData, clearContentView, Components } from '../utils/Components';
import api from '../utils/API';
import store from '../store';
import { setSections, setSectionTags, setContentComponent } from '../actions/newsActions'
import { Link, withRouter } from 'react-router-dom';

class ContentViewTags extends Component {

  searchForTag = (e) => {
    const query = e.target.innerHTML
    const { language } = store.getState().settings.search
    clearContentView();
    api.getSearchResults((res) => {
      setInitData(res);
      store.dispatch(setSections([res]))
      store.dispatch(setSectionTags([]))
    }, { q: query, language })
  }

  render() {
    return this.props.tags.map((tag, i) => (
      <Link to="/search-results">
        <li className='tag' term={tag.term} key={i} onClick={this.searchForTag}>
          <p>{`${tag.term}${tag.probability > 0.15 ? ' 🔥' : ''}`}</p>
        </li>
      </Link>
    ));
  }

}

export default withRouter(ContentViewTags);