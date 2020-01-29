import {
  SET_CURRENT_USER,
  USER_LOADING
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  // isAuthenticated: false,
  settings: {
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
    },
  }//,
  // user: {
  //   name: "Pizzaboi",
  //   email: "pizza@hut.com",
  //   settings: {
  //     darkMode: false,
  //     country: "de",
  //     language: "de"
  //   }
  // },
  // loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        settings: action.payload
      };

    case USER_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}