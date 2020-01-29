import { SET_CURRENT_SETTINGS } from "../actions/types";

const initialState = {
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
    console.log(action.payload);
    return {
      ...state,
      ...action.payload
    }
  } else {
    return state;
  }
}