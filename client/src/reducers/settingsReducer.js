import { SET_CURRENT_SETTINGS } from "../actions/types";

const store = require('store');

const initialState = (store.get('settings')) ? store.get('settings') : {
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
  if (action.type === SET_CURRENT_SETTINGS) {
    store.set('settings', action.payload)
    return {
      ...state,
      ...action.payload
    }
  } else {
    return state;
  }
}