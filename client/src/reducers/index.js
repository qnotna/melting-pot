export default (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state, // copy every property of the previous state
        user: action.user
      }

    case "ADD_SECTION":
      console.log(action)
      const sections = state.sections
      sections.push(action.section)
      return {
        ...state,
        sections
      }

    case "SET_SECTIONS":
      return {
        ...state,
        sections: action.sections
      }

    case "SET_SEARCH_PARAMS":
      return {
        ...state,
        searchParams: action.searchParams
      }

    case "SET_CONTENT_COMPONENT":
      return {
        ...state,
        content_component: action.component
      }
    
    case "SET_NEW_USER_DATA":
      console.log('in reducer')
      console.log(action.newUserData)

      var returnObject = {
        ...state
      }

      for(var i = 0; i < Object.keys(action.newUserData).length; i++) {
        if(Object.keys(action.newUserData)[i] === 'name'){
          returnObject.user.name = action.newUserData.name;
        }
        if(Object.keys(action.newUserData)[i] === 'email'){
          returnObject.user.email = action.newUserData.email;
        }
        if(Object.keys(action.newUserData)[i] === 'password'){
        }
        if(Object.keys(action.newUserData)[i] === 'settings'){
          for(var y = 0; y < Object.keys(action.newUserData[i].settings).length; y++) {
            if(Object.keys(action.newUserData[i].settings[y]) === 'darkMode') {
              returnObject.user.settings.darkMode = action.newUserData.name;
            }
            if(Object.keys(action.newUserData)[i] === 'language'){
              returnObject.user.settings.language = action.newUserData.email;
            }
          }
          returnObject.user.email = action.newUserData.email;
        }
      }

      return returnObject

    default:
      return state;
  }
}