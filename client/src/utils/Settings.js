export const Type = {

  TEXT: 'text',
  SELECT: 'select',
  CHECKBOX: 'checkbox'

}

export const Settings = {

  USERNAME: {
    name: 'Username',
    inputType: 'text',
    placeholder: 'hans bauer',
    type: Type.TEXT
  },
  EMAIL_ADRESS: {
    name: 'Email Adress',
    inputType: 'email',
    placeholder: 'spam@me.com',
    type: Type.TEXT
  },
  PASSWORD: {
    name: 'Password',
    inputType: 'password',
    placeholder: 'New Password',
    type: Type.TEXT
  },
  DEFAULT_LANGUAGE: {
    name: 'Default Article Language',
    selectFrom: 'language',
    options: [],
    type: Type.SELECT
  },
  DEFAULT_COUNTRY: {
    name: 'Default Article Country',
    selectFrom: 'country',
    options: [],
    type: Type.SELECT
  },
  DEFAULT_SORTING: {
    name: 'Sort Articles by Default by',
    selectFrom: 'sortBy',
    options: [],
    type: Type.SELECT
  },
  ENABLE_DARK_MODE: {
    name: 'Toggle Dark Appearance',
    type: Type.CHECKBOX
  },
  LOAD_ARTICLES_WITHOUT_IMAGES: {
    name: 'Load All Articles Without Images',
    type: Type.CHECKBOX
  },
  REDIRECT_TO_ORIGINAL_SAUCE: {
    name: 'Present All Articles on its Original Site',
    type: Type.CHECKBOX
  }

};