import React, {Component} from 'react';
import '../stylesheets/NavigationBar.css';
import SearchBar from './SearchBar.js'

class NavigationBar extends Component {

  render() {
    return(
      <div id="navigation-bar" elastic={this.props.elastic}>
        <SearchBar/>
      </div>
    );
  }

}

export default NavigationBar;