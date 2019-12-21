import React, {Component} from 'react';
import SideBarSections from './SideBarSections.js'
import ProfileOverview from './ProfileOverview.js'
import '../stylesheets/SideBar.css';

import { Scrollbars } from 'react-custom-scrollbars';

class SideBar extends Component {

  render() {
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