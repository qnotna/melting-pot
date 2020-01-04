import React, {Component} from 'react';
import SideBarSections from './SideBarSections.js'
import ProfileOverview from './ProfileOverview.js'
import '../stylesheets/SideBar.css';

import { Scrollbars } from 'react-custom-scrollbars';

// DarkMode
import '../stylesheets/DarkMode.css';

// Redux
import store from '../store.js';

class SideBar extends Component {
  componentDidMount = () => {
    if(store.getState().darkMode) {
      document.getElementById('sidebar').classList.add('darkMode-sidebar');
     }
    else {
      document.getElementById('sidebar').classList.remove('darkMode-sidebar');
    }
  }

  render() {
    if(document.getElementById('sidebar') !== null) {
      if(store.getState().darkMode) {
        document.getElementById('sidebar').classList.add('darkMode-sidebar');
      }
      else {
        document.getElementById('sidebar').classList.remove('darkMode-sidebar');
      }
    }

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