import React, {Component} from 'react';
import '../stylesheets/NavigationBar.css';

class NavigationBar extends Component {

  render() {
    return(
      <div id="navigation-bar" elastic={this.props.elastic}>
        <button type='submit' onClick={this.props.collapseSidebar}>Categories</button>
        <div id='search-bar'>
          <input type='search' placeholder='Seach for articles, publishers and more...'/>
        </div>
        <button type='submit'>Search</button>
      </div>
    );
  }

}

export default NavigationBar;