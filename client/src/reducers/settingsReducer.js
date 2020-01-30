import { SET_CURRENT_SETTINGS } from "../actions/types";

const localStorage = require('store');

const initialState = (localStorage.get('settings')) ? localStorage.get('settings') : {
  fakeNews: {
    verifiedSources: true,
    highQuality: true,
    clickbaitTitles: true,
    domainNameCheck: true
  },
  search: {
    language: 'de',
    country: 'de',
    pageSize: 20
  },
  app: {
    appearance: 'System Style'
  }
};

export default function (state = initialState, action) {
  localStorage.set('settings', action.payload)
  return {
    ...state,
    ...action.payload
  }
}