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
        {
          title: 'Melting Hot',
          unreadAmount: 10
        },
        {
          title: 'Favoriten',
          unreadAmount: 2
        },
        {
          title: 'Später lesen',
          unreadAmount: 14
        }
      ]
    },
    {
      id: 1,
      title: 'Kategorien',
      items: [
        {
          title: 'Business',
          unreadAmount: 17
        },
        {
          title: 'Entertainment',
          unreadAmount: 23
        },
        {
          title: 'Health',
          unreadAmount: 43
        },
        {
          title: 'Science',
          unreadAmount: 10
        },
        {
          title: 'Sportz',
          unreadAmount: 2
        },
        {
          title: 'Technology',
          unreadAmount: 0
        }
      ]
    },
    {
      id: 2,
      title: 'Your Profile',
      items: [
        {
          title: 'Settings',
          unreadAmount: 0
        },
        {
          title: 'Log Out',
          unreadAmount: 0
        }
      ]
    }
  ]

  render() {
    return(
      <div id="sidebar">
        <div className='sidebar-sections'>
          <SideBarSections sections={this.sections}/>
        </div>
        <ProfileOverview user={this.props.user}/>
      </div>
    );
  }

}

export default SideBar;