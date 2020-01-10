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
          console.log('in settings')
          var settingsObject = action.newUserData.settings;
          console.log(Object.keys(settingsObject));
          for(var y = 0; y < Object.keys(settingsObject).length; y++) {
            console.log('in settings schleife')
            if(Object.keys(settingsObject)[y] === 'darkMode') {
              console.log('in darkMode')
              returnObject.user.settings.darkMode = settingsObject.darkMode;
            }
            if(Object.keys(settingsObject)[y] === 'language') {
              console.log('in language')
              returnObject.user.settings.language = settingsObject.language;
            }
            /*
            if(Object.keys(settingsObject)[y] === 'articleWithoutImg') {
              returnObject.user.settings.darkMode = settingsObject.darkMode;
            }
            */
          }
        }
      }
      console.log('returnObject vor return')
      console.log(returnObject)
      return returnObject

    default:
      return state;
  }
}