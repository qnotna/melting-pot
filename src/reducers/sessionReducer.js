const localStorage = window.localStorage;

let initialState = {
  
    local_storage_article: {}

};
initialState = localStorage.getItem('session') || initialState

export default (state = initialState, action) => {
  localStorage.setItem('session', JSON.stringify(action.local_storage_article))
  return {
    ...state,
    ...action.local_storage_article
  }
//   switch(action.type) {
//     case "SET_LOCAL_STORAGE_ARTICLE":
//       return {
//         ...state,
//         local_storage_article: action.local_storage_article
//       }
//   }
}