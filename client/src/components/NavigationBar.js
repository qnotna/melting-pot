import React, {Component} from 'react';
import SearchBar from './SearchBar.js';
import store from '../store.js';

class NavigationBar extends Component {

  render() {
    return(
      <div className="navigation-bar" elastic={this.props.elastic}>
        <button type='submit' onClick={this.props.collapseSidebar}>
          <span className='material-icons'>menu</span>
        </button>
        <SearchBar/>
      </div>
    );
  }
}

export default NavigationBar;