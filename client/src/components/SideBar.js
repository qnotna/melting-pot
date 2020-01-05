import React, {Component} from 'react';
import SideBarSections from './SideBarSections.js';
import ProfileOverview from './ProfileOverview.js';
import store from '../store.js';
import '../stylesheets/SideBar.css';
import '../stylesheets/DarkMode.css';
import { Scrollbars } from 'react-custom-scrollbars';

class SideBar extends Component {
  handleDarkMode = () => {
    if(document.getElementById('sidebar') !== null) {
      if(store.getState().darkMode) {
        document.getElementById('sidebar').classList.add('darkMode-sidebar');
      }
      else {
        document.getElementById('sidebar').classList.remove('darkMode-sidebar');
      }
    }
  }

  componentDidMount = () => {
    this.handleDarkMode();
  }

  render() {
    this.handleDarkMode();

    return(
      <div id="sidebar">
        <Scrollbars>
          <ul className='sidebar-sections'>
            <SideBarSections sections={this.props.sections}/>
          </ul>
          <ProfileOverview user={this.props.user}/>
        </Scrollbars>
      </div>
    );
  }

}

export default SideBar;