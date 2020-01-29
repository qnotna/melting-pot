import { languages, country, appearance } from '../data/options.js';
import store from '../store.js';

export const Type = {

  TEXT: 'text',
  SELECT: 'select',
  CHECKBOX: 'checkbox'

}

export const Settings = {

  VERIFIED_SOURCES: {
    type: Type.CHECKBOX,
    name: 'Show Verified Sources',
    defaultValue: () => (
      store.getState().settings.fakeNews.verifiedSources
    ),
    key: 'verifiedSources'
  },

  HIGH_QUALITY_ARTICLES: {
    type: Type.CHECKBOX,
    name: 'Show Article Quality',
    defaultValue: () => (
      store.getState().settings.fakeNews.highQuality
    ),
    key: 'highQuality'
  },

  CLICKBAIT_TITLES: {
    type: Type.CHECKBOX,
    name: 'Show Title Accuracy',
    defaultValue: () => (
      store.getState().settings.fakeNews.clickbaitTitles
    ),
    key: 'clickbaitTitles'
  },

  DOMAIN_NAME_CHECK: {
    type: Type.CHECKBOX,
    name: 'Show Weird Source Website Names',
    defaultValue: () => (
      store.getState().settings.fakeNews.domainNameCheck
    ),
    key: 'domainNameCheck'
  },

  DEFAULT_LANGUAGE: {
    type: Type.SELECT,
    name: 'Default Article Language',
    options: languages,
    defaultValue: () => (
      store.getState().settings.search.language
    ),
    key: 'language'
  },

  DEFAULT_COUNTRY: {
    type: Type.SELECT,
    name: 'Default Article Country',
    options: country,
    defaultValue: () => (
      store.getState().settings.search.country
    ),
    key: 'country'
  },

  DEFAULT_PAGESIZE: {
    type: Type.TEXT,
    name: 'How Many Articles Should Be Loaded',
    inputType: 'number',
    defaultValue: () => (
      store.getState().settings.search.pageSize
    ),
    key: 'pageSize'
  },

  ENABLE_DARK_MODE: {
    type: Type.SELECT,
    name: 'Use Appearance',
    options: appearance,
    defaultValue: () => (
      store.getState().settings.app.appearance
    ),
    key: 'appearance'
  }
};