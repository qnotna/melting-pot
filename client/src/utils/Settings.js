import store from '../store.js';

export const Type = {

  TEXT: 'text',
  SELECT: 'select',
  CHECKBOX: 'checkbox'

}

const { name, email, settings } = store.getState().auth.user;
const { language, country, darkMode } = settings;

export const Settings = {

  USERNAME: {
    name: 'Username',
    inputType: 'text',
    placeholder: 'hans bauer',
    type: Type.TEXT,
    defaultValue: name,
    key: 'user.name'
  },
  EMAIL_ADRESS: {
    name: 'Email Adress',
    inputType: 'email',
    placeholder: 'spam@me.com',
    type: Type.TEXT,
    defaultValue: email,
    key: 'user.email'
  },
  PASSWORD: {
    name: 'Password',
    inputType: 'password',
    placeholder: 'New Password',
    type: Type.TEXT,
    defaultValue: 'my420cool69password', // TODO: get from store
    key: 'user.password'
  },
  DEFAULT_LANGUAGE: {
    name: 'Default Article Language',
    selectFrom: 'language',
    options: [],
    type: Type.SELECT,
    defaultValue: language,
    key: 'preferences.defaultLanguage'
  },
  DEFAULT_COUNTRY: {
    name: 'Default Article Country',
    selectFrom: 'country',
    options: [],
    type: Type.SELECT,
    defaultValue: country,
    key: 'preferences.defaultCountry'
  },
  DEFAULT_SORTING: {
    name: 'Sort Articles by Default by',
    selectFrom: 'sortBy',
    options: [],
    type: Type.SELECT,
    defaultValue: 'relevancy', // TODO: get from store
    key: 'preferences.sortBy'
  },
  ENABLE_DARK_MODE: {
    name: 'Enable Dark Appearance',
    type: Type.CHECKBOX,
    defaultValue: darkMode,
    key: 'appearance.darkMode'
  },
  LOAD_ARTICLES_WITHOUT_IMAGES: {
    name: 'Load All Articles Without Images',
    type: Type.CHECKBOX,
    defaultValue: true, // TODO: state undefined
    key: 'preferences.loadArticlesWithoutImages'
  },
  REDIRECT_TO_ORIGINAL_SAUCE: {
    name: 'Present All Articles on the Original Site',
    type: Type.CHECKBOX,
    defaultValue: true, // TODO: get from store
    key: 'preferences.redirect'
  }

};