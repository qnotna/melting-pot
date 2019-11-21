import React, {Component} from 'react';
import SideBarSections from './SideBarSections.js'
import ProfileOverview from './ProfileOverview.js'
import '../stylesheets/SideBar.css';

class SideBar extends Component {

  sections = [
    {
      id: 0,
      title: 'Neuigkeiten',
      items: [
        'Melting Hot', 'Für dich', 'Favoriten', 'Später lesen'
      ]
    },
    {
      id: 1,
      title: 'Kategorien',
      items: [
        'Business', 'Entertainment', 'Health', 'Science', 'Sportz', 'Technology'
      ]
    },
    {
      id: 2,
      title: 'Your Profile',
      items: [
        'Settings', 'Log Out'
      ]
    }
  ]

  render() {
    return(
      <div id="sidebar">
        <div className='sidebar-sections'>
          <SideBarSections sections={this.sections}/>
          <ProfileOverview/>
        </div>
      </div>
    );
  }

}

export default SideBar;