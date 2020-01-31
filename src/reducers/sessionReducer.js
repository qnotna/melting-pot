const localStorage = require('store');

const initialState = (localStorage.get('session')) ? localStorage.get('session') : {
  
    local_storage_article: {}

};

export default (state = initialState, action) => {
  localStorage.set('session', action.local_storage_article)
  return {
    ...state,
    ...action.local_storage_article
  }
  // switch(action.type) {
  //   case "SET_LOCAL_STORAGE_ARTICLE":
  //     return {
  //       ...state,
  //       local_storage_article: action.local_storage_article
  //     }
  // }
}