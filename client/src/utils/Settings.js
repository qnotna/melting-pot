import React from 'react';
import SettingsItemText from '../components/settings/SettingsItemText.js';
import SettingsItemSelect from '../components/settings/SettingsItemSelect.js';
import SettingsItemCheckbox from '../components/settings/SettingsItemCheckbox.js';
// import api from '../../utils/API';
// import store from '../../store';

export const Settings = {
  USERNAME: <SettingsItemText
    name='Username'
    type='text'
    placeholder='antoniusmaximus'
    dispatch={
      (value) => console.log(value)
    }
  />,
  EMAIL_ADRESS: <SettingsItemText
    name='Email Adress'
    type='text'
    placeholder='spam@me.com'
    dispatch={
      (value) => console.log(value)
    }
  />,
  PASSWORD: <SettingsItemText
    name='Password'
    type='password'
    placeholder='Input New Password'
    dispatch={
      (value) => console.log(value)
    }
  />,
  DEFAULT_LANGUAGE: <SettingsItemSelect
    name='Default Article Language'
    options={[]}
    dispatch={
      (value) => console.log(value)
    }
  />,
  DEFAULT_COUNTRY: <SettingsItemSelect
    name='Default Article Origin Country'
    options={[]}
    dispatch={
      (value) => console.log(value)
    }
  />,
  ENABLE_DARK_MODE: <SettingsItemCheckbox
    name='Enable Dark Appearance'
    dispatch={
      (value) => console.log(value)
    }
  />,
  LOAD_ARTICLES_WITHOUT_IMAGES: <SettingsItemCheckbox
    name='Load All Articles Without Images'
    dispatch={
      (value) => console.log(value)
    }
  />,
  REDIRECT_TO_ORIGINAL_SAUCE: <SettingsItemCheckbox
    name='Present All Articles on its Original Site'
    dispatch={
      (value) => console.log(value)
    }
  />
};