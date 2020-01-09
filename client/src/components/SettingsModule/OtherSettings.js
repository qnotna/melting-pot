import React, { Component } from 'react';
import store from '../../store';
import { setUser } from '../../actions';
import api from '../../utils/API';
import { setNewUserData } from '../../actions/index';
import { setDarkMode } from '../../actions/index';
import { languages, sortOptions } from '../../data/options';

// Icons: https://material.io/resources/icons/?style=baseline

export default class otherSettings extends Component {
  handleDarkMode = () => {
    if(document.getElementById('otherSettingsForm') !== null) {
      if(store.getState().darkMode) {
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
    store.dispatch(setDarkMode(document.getElementById('darkMode').checked));
  }

  handleSelectedLanguage = () => {
    console.log('select another languae')
    var selectedCountry = document.getElementById('selectLanguage').value;
    console.log(selectedCountry)
  }

  handleArticleWithoutImgCheckbox = () => {
    console.log('in handleArticleCheckbox');
  }

  componentDidMount = () => {
    document.getElementById("darkMode").checked = store.getState().user.settings.darkMode;
    document.getElementById("articleWithoutImg").checked = store.getState().user.settings.darkMode;

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