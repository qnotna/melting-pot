import { SET_CURRENT_SETTINGS } from "../actions/types";

const localStorage = require('store');

let initialState = {
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
// console.log(localStorage.getItem('settings'));
initialState = localStorage.get('settings') || initialState;

export default function (state = initialState, action) {
  localStorage.set('settings', action.payload);
  return {
    ...state,
    ...action.payload
  }
}