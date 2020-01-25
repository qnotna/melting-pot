import store from '../store.js';

export const Type = {

  TEXT: 'text',
  SELECT: 'select',
  CHECKBOX: 'checkbox'

}

// console.log();

export const Settings = {

  USERNAME: {
    name: 'Username',
    inputType: 'text',
    placeholder: 'hans bauer',
    type: Type.TEXT,
    defaultValue: store.getState().auth.user.name
  },
  EMAIL_ADRESS: {
    name: 'Email Adress',
    inputType: 'email',
    placeholder: 'spam@me.com',
    type: Type.TEXT,
    defaultValue: store.getState().auth.user.email
  },
  PASSWORD: {
    name: 'Password',
    inputType: 'password',
    placeholder: 'New Password',
    type: Type.TEXT,
    defaultValue: 'my420cool69password' // TODO: get from store
  },
  DEFAULT_LANGUAGE: {
    name: 'Default Article Language',
    selectFrom: 'language',
    options: [],
    type: Type.SELECT,
    defaultValue: store.getState().auth.user.settings.language
  },
  DEFAULT_COUNTRY: {
    name: 'Default Article Country',
    selectFrom: 'country',
    options: [],
    type: Type.SELECT,
    defaultValue: store.getState().auth.user.settings.country
  },
  DEFAULT_SORTING: {
    name: 'Sort Articles by Default by',
    selectFrom: 'sortBy',
    options: [],
    type: Type.SELECT,
    defaultValue: 'relevancy' // TODO: get from store
  },
  ENABLE_DARK_MODE: {
    name: 'Enable Dark Appearance',
    type: Type.CHECKBOX,
    defaultValue: store.getState().auth.user.settings.darkMode
  },
  LOAD_ARTICLES_WITHOUT_IMAGES: {
    name: 'Load All Articles Without Images',
    type: Type.CHECKBOX,
    defaultValue: true // TODO: state undefined
  },
  REDIRECT_TO_ORIGINAL_SAUCE: {
    name: 'Present All Articles on the Original Site',
    type: Type.CHECKBOX,
    defaultValue: true // TODO: get from store
  }

};