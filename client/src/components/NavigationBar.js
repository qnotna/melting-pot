import React, {Component} from 'react';
import '../stylesheets/NavigationBar.css';
import SearchBar from './SearchBar';

class NavigationBar extends Component {
  render() {
    return(
      <div id="navigation-bar" elastic={this.props.elastic}>
        <button type='submit' onClick={this.props.collapseSidebar}>Categories</button>
        <SearchBar/>
      </div>
    );
  }

}

export default NavigationBar;