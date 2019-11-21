import React, {Component, Fragment} from 'react';

class SearchBar extends Component {

  render() {
    return(
      <Fragment>
        <div id='search-bar'>
          <input type='search' placeholder='Seach for articles, publishers and more...'/>
        </div>
        <button type='submit'>Search</button>
      </Fragment>
    );
  }

}

export default SearchBar;