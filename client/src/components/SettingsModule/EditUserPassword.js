import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions/newsActions';
import api from '../../utils/API'
import { setNewUserData } from '../../actions/newsActions'

import '../../stylesheets/Settings.css'
import '../../stylesheets/DarkMode.css';

export default class EditUserPassword extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
  }

  changeUserPassword = () => {
    // Was fehlt überprüfen ob email und username schon vorhanden sind in der Datenban
    var submitedOldPassword = document.getElementById("oldPassword").value;
    var submitedNewPassword = document.getElementById("newPassword").value;

    // Was fehlt: Überprüfen ob sich der Ursprungwert vom neuen Wert unterscheidet
    var newUserData = {};
    if(submitedNewPassword !== '' && submitedOldPassword !== '') {
      var password = {
        'oldPassword': submitedOldPassword,
        'newPassword': submitedNewPassword,
      }
      
      newUserData.password = password;

      api.updateUserData((res) => {
        store.dispatch(setNewUserData(res.newUserData));
        this.setState({message: 'Das Passwort wurde aktualisiert.'});
        setTimeout(() => {
          this.setState({message: ''})
        }, 5000);
      }, newUserData)
    }
    else {
      this.setState({message: 'Bitte fülle beide Felder aus.'});
    }
  }

  handleDarkMode = () => {
    if(document.getElementById('editPasswordForm') !== null) {
      if(store.getState().user.settings.darkMode) {
        document.getElementById('oldPassword').classList.add('darkMode-input-text');
        document.getElementById('newPassword').classList.add('darkMode-input-text');
      }
      else {
        document.getElementById('oldPassword').classList.remove('darkMode-input-text');
        document.getElementById('newPassword').classList.remove('darkMode-input-text');
      }
    }
  }

  componentDidMount = () => {
    this.handleDarkMode();
  }

  render(){
    this.handleDarkMode();

    return(
      <div>
        <form id='editPasswordForm'>
          <div style={{'display':'block', 'marginTop':'20px'}}>
            Old Password: <input type='password' id='oldPassword'></input>
          </div>
          <br/>
          <div style={{'display':'block', 'marginBottom':'8px'}}>
            New Password: <input type='password' id='newPassword'></input>
          </div>
        </form>
        <button style={{'marginBottom':'8px'}} className='saveButton' onClick={() => this.changeUserPassword()}>Save</button>
        <p>{this.state.message}</p>
        </div>
      )
  }
}