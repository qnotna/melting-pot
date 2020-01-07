import React, {Component} from 'react';
import store from '../store.js';

class ProfileOverview extends Component {

  render() {
    return(
      <div id='profile-overview'>
      <img id='avatar-preview' src='https://www.bevlabvet.com/images/circle-dark.png' alt='User avatar'/>
      <div>
    <p id='username'>{store.getState().user.name}</p>
        <p id='mail-adress'>{store.getState().user.email}</p>
        </div>
      </div>
    );
  }

}

export default ProfileOverview;