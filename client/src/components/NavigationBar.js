import React, {Component} from 'react';
import '../stylesheets/NavigationBar.css';
import SearchBar from './SearchBar';

// Menu button
// https://en.wikipedia.org/wiki/Hamburger_button

// Redux
import store from '../store.js';

// DarkMode
import '../stylesheets/DarkMode.css';

class NavigationBar extends Component {
    componentDidMount = () => {
        if(document.getElementById('navigation-bar') !== null) {
            if(store.getState().darkMode) {
                var buttonsInSearchBarForm = document.getElementById('navigation-bar').getElementsByTagName('button');
                
                for(var a = 0; a < buttonsInSearchBarForm.length; a++) {
                    buttonsInSearchBarForm[a].classList.add('darkMode-navigation-bar-button');
                }

                document.getElementById('navigation-bar').classList.add('darkMode-navigation-bar');
            }
            else {
                var buttonsInSearchBarForm = document.getElementById('navigation-bar').getElementsByTagName('button');
                
                for(var a = 0; a < buttonsInSearchBarForm.length; a++) {
                    buttonsInSearchBarForm[a].classList.remove('darkMode-navigation-bar-button');
                }

                document.getElementById('navigation-bar').classList.remove('darkMode-navigation-bar');
            }
        }
    }

    render() {
        if(document.getElementById('navigation-bar') !== null) {
            if(store.getState().darkMode) {
                var buttonsInSearchBarForm = document.getElementById('navigation-bar').getElementsByTagName('button');
                
                for(var a = 0; a < buttonsInSearchBarForm.length; a++) {
                    buttonsInSearchBarForm[a].classList.add('darkMode-navigation-bar-button');
                }

                document.getElementById('navigation-bar').classList.add('darkMode-navigation-bar');
            }
            else {
                var buttonsInSearchBarForm = document.getElementById('navigation-bar').getElementsByTagName('button');
                
                for(var a = 0; a < buttonsInSearchBarForm.length; a++) {
                    buttonsInSearchBarForm[a].classList.remove('darkMode-navigation-bar-button');
                }

                document.getElementById('navigation-bar').classList.remove('darkMode-navigation-bar');
            }
        }
        return(
            <div id="navigation-bar" elastic={this.props.elastic}>
              <div style={{'width':'100%', 'display': 'flex', 'flexWrap': 'nowrap'}}>
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