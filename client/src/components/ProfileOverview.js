import React, {Component} from 'react';

class ProfileOverview extends Component {

  render() {
    return(
      <div id='profile-overview'>
      <img id='avatar-preview' src='https://www.bevlabvet.com/images/circle-dark.png' alt='User avatar'/>
      <div>
        <p id='username'>{this.props.user.name}</p>
        <p id='mail-adress'>{this.props.user.mailAdress}</p>
        </div>
      </div>
    );
  }

}

export default ProfileOverview;