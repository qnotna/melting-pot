import store from '../store.js';

export const Type = {

  TEXT: 'text',
  SELECT: 'select',
  CHECKBOX: 'checkbox'

}

export const Settings = {

  // { name, email, settings } = store.getState().auth.user,
  // { language, country, darkMode } = settings,
  // console.log(name)

  USERNAME: {
    name: 'Username',
    inputType: 'text',
    placeholder: 'hans bauer',
    type: Type.TEXT,
    defaultValue: () => (
      store.getState().auth.user.name
    ),
    key: 'name'
  },
  EMAIL_ADRESS: {
    name: 'Email Adress',
    inputType: 'email',
    placeholder: 'spam@me.com',
    type: Type.TEXT,
    defaultValue: () => (
      store.getState().auth.user.email
    ),
    key: 'email'
  },
  // PASSWORD: {
  //   name: 'Password',
  //   inputType: 'password',
  //   placeholder: 'New Password',
  //   type: Type.TEXT,
  //   defaultValue: 'my420cool69password', // TODO: get from store
  //   key: 'password'
  // },
  DEFAULT_LANGUAGE: {
    name: 'Default Article Language',
    selectFrom: 'language',
    options: [],
    type: Type.SELECT,
    defaultValue: () => (
      store.getState().auth.user.settings.language
    ),
    key: 'defaultLanguage'
  },
  DEFAULT_COUNTRY: {
    name: 'Default Article Country',
    selectFrom: 'country',
    options: [],
    type: Type.SELECT,
    defaultValue: () => (
      store.getState().auth.user.settings.country
    ),
    key: 'defaultCountry'
  },
  // DEFAULT_SORTING: {
  //   name: 'Sort Articles by Default by',
  //   selectFrom: 'sortBy',
  //   options: [],
  //   type: Type.SELECT,
  //   defaultValue: 'settings.relevancy', // TODO: get from store
  //   key: 'sortBy'
  // },
  ENABLE_DARK_MODE: {
    name: 'Enable Dark Appearance',
    type: Type.CHECKBOX,
    defaultValue: () => (
      store.getState().auth.user.settings.darkMode
    ),
    key: 'darkMode'
  }//,
  // LOAD_ARTICLES_WITHOUT_IMAGES: {
  //   name: 'Load All Articles Without Images',
  //   type: Type.CHECKBOX,
  //   defaultValue: true, // TODO: state undefined
  //   key: 'loadArticlesWithoutImages'
  // },
  // REDIRECT_TO_ORIGINAL_SAUCE: {
  //   name: 'Present All Articles on the Original Site',
  //   type: Type.CHECKBOX,
  //   defaultValue: true, // TODO: get from store
  //   key: 'redirect'
  // }

};