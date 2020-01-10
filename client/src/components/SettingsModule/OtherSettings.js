import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API';
import { setNewUserData } from '../../actions/index';
import { languages, sortOptions } from '../../data/options';

// Icons: https://material.io/resources/icons/?style=baseline

export default class otherSettings extends Component {
  handleDarkMode = () => {
    if(document.getElementById('otherSettingsForm') !== null) {
      if(store.getState().user.settings.darkMode) {
        var otherSettingsFormDiv = document.getElementById('otherSettingsForm').getElementsByTagName('div');
        for(var h = 0; h < otherSettingsFormDiv.length; h++) {
          var otherSettingsFormDivSelect = otherSettingsFormDiv[h].getElementsByTagName('select');
          for(var g = 0; g < otherSettingsFormDivSelect.length; g++) {
            otherSettingsFormDivSelect[g].classList.add('darkMode-select');
          }
        }
      }
      else {
        var otherSettingsFormDiv = document.getElementById('otherSettingsForm').getElementsByTagName('div');
        for(var h = 0; h < otherSettingsFormDiv.length; h++) {
          var otherSettingsFormDivSelect = otherSettingsFormDiv[h].getElementsByTagName('select');
          for(var g = 0; g < otherSettingsFormDivSelect.length; g++) {
            otherSettingsFormDivSelect[g].classList.remove('darkMode-select');
          }
        }
      }  
    }          
  } 

  handleDarkModeCheckbox = () => {
    var darkModeValue = document.getElementById("darkMode").checked;

    console.log(darkModeValue)
    
    var newUserData = {
      settings: {
        darkMode: darkModeValue
      }
    };

    console.log('hier in othersettings')

    api.updateUserData((res) => {
      store.dispatch(setNewUserData(res.newUserData))
    }, newUserData)
  }

  handleSelectedLanguage = () => {
    console.log('select another languae')
    var selectedLanguage = document.getElementById('selectLanguage').value;
    console.log(selectedLanguage)
    
    var newUserData = {
      settings: {
        language: selectedLanguage
      }
    };

    console.log('hier in handleSelectedLanguage')

    api.updateUserData((res) => {
      store.dispatch(setNewUserData(res.newUserData))
    }, newUserData)
  }

  handleArticleWithoutImgCheckbox = () => {
    console.log('in handleArticleCheckbox');
  }

  componentDidMount = () => {
    document.getElementById("darkMode").checked = store.getState().user.settings.darkMode;
    document.getElementById("articleWithoutImg").checked = false;

    this.handleDarkMode();
  }

  render() { 
    this.handleDarkMode();
        
    return(
      <div>
        <form id='otherSettingsForm'>
            <div style={{'display':'block', 'marginTop':'20px', 'marginBottom': '8px'}}>
            Dark Mode <input onClick={() => this.handleDarkModeCheckbox()} type="checkbox" id="darkMode"/>
            </div>
            <div style={{'display':'block', 'marginTop':'20px', 'marginBottom': '8px'}}>
            Artikel ohne Bilder lesen <input onClick={() => this.handleArticleWithoutImgCheckbox()} type="checkbox" id="articleWithoutImg"/>
            </div>
            <div style={{'display':'block', 'marginTop':'20px'}}>
              <label style={{'marginRight':'5px'}}>Sprache der Artikel</label>
              <select style={{'borderRadius': '0.25em'}} id="selectLanguage" onChange={() => this.handleSelectedLanguage()}>
                  {Object.keys(languages).map((key =>
                  <option key={key} value={key}>{languages[key]}</option>
                  ))}
              </select>
            </div>
        </form>
      </div>
    )
  }
}