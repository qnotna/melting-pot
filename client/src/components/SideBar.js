import React, {Component} from 'react';
import SideBarSections from './SideBarSections.js';
import ProfileOverview from './ProfileOverview.js';
import { SidebarData } from '../data/SidebarData.js';

class SideBar extends Component {
  render() {

    return(
      <div className="sidebar">
        <ul className='sidebar_sections'>
          <SideBarSections sections={SidebarData}/>
        </ul>
        <ProfileOverview/>
      </div>
    );
  }

}

export default SideBar;