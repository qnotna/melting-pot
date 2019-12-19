import React, {Component} from 'react';
import '../stylesheets/NavigationBar.css';
import SearchBar from './SearchBar';

class NavigationBar extends Component {
  getInput= (data) => {
    // console.log(data);
    this.props.func(data);
  }

  render() {
    return(
      <div id="navigation-bar" elastic={this.props.elastic}>
        <button type='submit' onClick={this.props.collapseSidebar}>Categories</button>
        <SearchBar func={this.getInput}></SearchBar>

        {/* <div id='search-bar'>
          <input type='search' placeholder='Seach for articles, publishers and more...'/>
        </div>
        <button type='submit'>Search</button> */}
      </div>
    );
  }

}

export default NavigationBar;