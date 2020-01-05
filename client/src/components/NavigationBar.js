import React, {Component} from 'react';
import '../stylesheets/NavigationBar.css';
import SearchBar from './SearchBar';

// Menu button
// https://en.wikipedia.org/wiki/Hamburger_button

class NavigationBar extends Component {
  render() {
    return(
      <div id="navigation-bar" elastic={this.props.elastic}>
        <button type='submit' onClick={this.props.collapseSidebar} style={{'padding':'0 0 0 0.45em'}}>
          <span  
              style = {{'color':'black', 'fontSize':'20px'}} 
              className = 'material-icons'
            >
              menu
            </span>
        </button>
        <SearchBar/>
      </div>
    );
  }

}

export default NavigationBar;