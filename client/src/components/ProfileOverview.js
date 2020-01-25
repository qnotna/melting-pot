import React, {Component} from 'react';
import store from '../store.js';

class ProfileOverview extends Component {

  render() {
    const {name, email} = store.getState().auth.user
    return(
      <div id='profile-overview'>
      <img id='avatar-preview' src='https://www.bevlabvet.com/images/circle-dark.png' alt='User avatar'/>
      <div>
    <p id='username'>{name}</p>
        <p id='mail-adress'>{email}</p>
        </div>
      </div>
    );
  }

}

export default ProfileOverview;