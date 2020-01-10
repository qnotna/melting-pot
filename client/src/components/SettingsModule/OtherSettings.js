import React, { Component } from 'react';
import store from '../../store';
import api from '../../utils/API';
import { setNewUserData } from '../../actions/index';
import { languages, country } from '../../data/options';

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

        for(var j = 0; j < otherSettingsFormDiv.length; j++) {
          var otherSettingsFormDivOption = otherSettingsFormDiv[j].getElementsByTagName('option');
          for(var k = 0; k < otherSettingsFormDivOption.length; k++) {
            otherSettingsFormDivOption[k].classList.add('darkMode-option');
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

        for(var j = 0; j < otherSettingsFormDiv.length; j++) {
          var otherSettingsFormDivOption = otherSettingsFormDiv[j].getElementsByTagName('option');
          for(var k = 0; k < otherSettingsFormDivOption.length; k++) {
            otherSettingsFormDivOption[k].classList.remove('darkMode-option');
          }
        }
      }  
    }          
  } 

  handleDarkModeCheckbox = () => {
    var darkModeValue = document.getElementById("darkMode").checked;
    
    var newUserData = {
      settings: {
        darkMode: darkModeValue
      }
    };

    api.updateUserData((res) => {
      store.dispatch(setNewUserData(res.newUserData))
    }, newUserData)
  }

  handleSelectedLanguage = () => {
    var selectedLanguage = document.getElementById('selectLanguage').value;
    
    var newUserData = {
      settings: {
        language: selectedLanguage
      }
    };

    api.updateUserData((res) => {
      store.dispatch(setNewUserData(res.newUserData))
    }, newUserData)
  }

  handleSelectedCountry = () => {
    var selectedCountry = document.getElementById('selectCountry').value;
    
    var newUserData = {
      settings: {
        country: selectedCountry
      }
    };

    console.log(newUserData)

    api.updateUserData((res) => {
      store.dispatch(setNewUserData(res.newUserData))
    }, newUserData)
  }

  handleReadArticleWithoutPicturesCheckbox = () => {
    var readArticleWithoutPicturesValue = document.getElementById("readArticleWithoutPictures").checked;
    
    var newUserData = {
      settings: {
        readArticleWithoutPictures: readArticleWithoutPicturesValue
      }
    };

    api.updateUserData((res) => {
      store.dispatch(setNewUserData(res.newUserData))
    }, newUserData)
  }

  componentDidMount = () => {
    document.getElementById("darkMode").checked = store.getState().user.settings.darkMode;
    document.getElementById("readArticleWithoutPictures").checked = store.getState().user.settings.readArticleWithoutPictures;

    var selectedLanguageOptions = document.getElementById('selectLanguage').getElementsByTagName('option');
    for(var w = 0; w < selectedLanguageOptions.length; w++) {
      if(selectedLanguageOptions[w].value === store.getState().user.settings.language) {
        selectedLanguageOptions[w].selected = true;
      }
    }

    var selectedCountryOptions = document.getElementById('selectCountry').getElementsByTagName('option');
    for(var v = 0; v < selectedCountryOptions.length; v++) {
      if(selectedCountryOptions[v].value === store.getState().user.settings.country) {
        selectedCountryOptions[v].selected = true;
      }
    }

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
            Artikel ohne Bilder lesen <input onClick={() => this.handleReadArticleWithoutPicturesCheckbox()} type="checkbox" id="readArticleWithoutPictures"/>
            </div>
            <div style={{'display':'block', 'marginTop':'20px'}}>
              <label style={{'marginRight':'5px'}}>Sprache der Artikel</label>
              <select style={{'borderRadius': '0.25em'}} id="selectLanguage" onChange={() => this.handleSelectedLanguage()}>
                  {Object.keys(languages).map((key =>
                  <option key={key} value={key}>{languages[key]}</option>
                  ))}
              </select>
            </div>
            <div style={{'display':'block', 'marginTop':'20px'}}>
              <label style={{'marginRight':'5px'}}>Land des Artikel</label>
              <select style={{'borderRadius': '0.25em'}} id="selectCountry" onChange={() => this.handleSelectedCountry()}>
                  {Object.keys(country).map((key =>
                  <option key={key} value={key}>{country[key]}</option>
                  ))}
              </select>
            </div>
        </form>
      </div>
    )
  }
}