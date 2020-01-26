import React, {Component} from 'react';
import store from '../store.js';

class ProfileOverview extends Component {

  render() {
    const {name, email} = store.getState().auth.user
    return(
      <div id='profile-overview'>
      <img id='profile-overview_avatar-preview' src='https://www.bevlabvet.com/images/circle-dark.png' alt='User avatar'/>
      <div>
    <p id='profile-overview_username'>{name}</p>
        <p id='profile-overview_mail-adress'>{email}</p>
        </div>
      </div>
    );
  }

}

export default ProfileOverview;