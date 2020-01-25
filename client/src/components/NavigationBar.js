import React, {Component} from 'react';
import '../stylesheets/NavigationBar.css';
import '../stylesheets/DarkMode.css';
import SearchBar from './SearchBar.js';
import store from '../store.js';

class NavigationBar extends Component {
  // handleDarkMode = () => {
  //   if(document.getElementById('navigation-bar') !== null) {
  //     if(store.getState().user.settings.darkMode) {
  //       var buttonsInSearchBarForm = document.getElementById('navigation-bar').getElementsByTagName('button');
  //       for(var a = 0; a < buttonsInSearchBarForm.length; a++) {
  //         buttonsInSearchBarForm[a].classList.add('darkMode-navigation-bar-button');
  //       }

  //       document.getElementById('navigation-bar').classList.add('darkMode-navigation-bar');
  //     }
  //     else {
  //       var buttonsInSearchBarForm = document.getElementById('navigation-bar').getElementsByTagName('button');      
  //       for(var a = 0; a < buttonsInSearchBarForm.length; a++) {
  //         buttonsInSearchBarForm[a].classList.remove('darkMode-navigation-bar-button');
  //       }

  //       document.getElementById('navigation-bar').classList.remove('darkMode-navigation-bar');
  //     }
  //   }
  // }

  componentDidMount = () => {
    // this.handleDarkMode();     
  }

  render() {
    // this.handleDarkMode();
    return(
      <div id="navigation-bar" elastic={this.props.elastic}>
        <div>
          <button type='submit' onClick={this.props.collapseSidebar} style={{'padding':'0 0 0 0.4em'}}>
            <span  
              style = {{'fontSize':'20px'}} 
              className = 'material-icons'
            >
              menu
            </span>
          </button>
          <SearchBar/>
          </div>
        </div>
    );
  }
}

export default NavigationBar;