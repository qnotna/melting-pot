import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API'
import { setNewUserData } from '../../actions/index'
import EditUserData from './EditUserData'
import EditUserPassword from './EditUserPassword'
import OtherSettings from './OtherSettings'

import '../../stylesheets/Settings.css'
import '../../stylesheets/DarkMode.css';

export default class Settings extends Component {
  state = {
    update: true
  }

  handleChangeUserData = () => {
  if(!document.getElementById('changeUserData').classList.contains('active')) {
    document.getElementById('changeUserData').classList.add('active');
    document.getElementById('changeUserPassword').classList.remove('active');
    document.getElementById('otherSettings').classList.remove('active');
            
    // re-render
    this.setState({update: !this.state.update});
    }
  }

  handleChangeUserPassword = () => {
    if(!document.getElementById('changeUserPassword').classList.contains('active')) {
      document.getElementById('changeUserData').classList.remove('active');
      document.getElementById('changeUserPassword').classList.add('active');
      document.getElementById('otherSettings').classList.remove('active');

      this.setState({update: !this.state.update});
    }
  }

  handleOtherSettings = () => {
    if(!document.getElementById('otherSettings').classList.contains('active')) {
      document.getElementById('changeUserData').classList.remove('active');
      document.getElementById('changeUserPassword').classList.remove('active');
      document.getElementById('otherSettings').classList.add('active');

      this.setState({update: !this.state.update});
    }
  }

  handleDarkMode = () => {
    if(document.getElementById('changeUserData') !== null){
      if(store.getState().user.settings.darkMode) {
        document.getElementById('settings-view').classList.add('darkMode-body');
      }
      else {
        document.getElementById('settings-view').classList.remove('darkMode-body');
      }
    }
  }

  componentDidMount = () => {
    document.getElementById('changeUserData').click();
    this.handleDarkMode();
  }

  render() {
    this.handleDarkMode();

    var returnComponent = null;
    if(document.getElementById('changeUserData') !== null && document.getElementById('changeUserPassword') !== null && document.getElementById('otherSettings') !== null) {
      if(document.getElementById('changeUserData').classList.contains('active')) {
        returnComponent = <EditUserData/>;
      }
      if(document.getElementById('changeUserPassword').classList.contains('active')) {
        returnComponent = <EditUserPassword/>;
      }
      if(document.getElementById('otherSettings').classList.contains('active')) {
        returnComponent = <OtherSettings/>;
      }
    }

    return(
      <div id='settings-view' style={{'width': '100%', 'height': '100vh'}}>
        <div style={{'margin': '2%'}}>
          <div style={{'display':'block'}}>
              <button 
                className='settingNavButton' 
                style={{'width':'30%', 'marginRight': '5%'}} 
                id='changeUserData' 
                onClick={() => {this.handleChangeUserData()}}
              >
                Edit ProfilData
              </button>
            <button 
              className='settingNavButton' 
              style={{'width':'30%', 'marginRight': '5%'}} 
              id='changeUserPassword' 
              onClick={() => {this.handleChangeUserPassword()}}
            >
              Edit Password
            </button>
            <button 
              className='settingNavButton' 
              style={{'width':'30%'}} id='otherSettings' 
              onClick={() => {this.handleOtherSettings()}}
            >
              Other Settings
            </button>
          </div>
          { returnComponent }
        </div>
      </div>
    )
  }
}    