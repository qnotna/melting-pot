export default (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state, // copy every property of the previous state
        user: action.user
      }

    case "ADD_SECTION":
      //console.log(action)
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
          // aktualsiere den store nicht
        }
        if(Object.keys(action.newUserData)[i] === 'settings'){
          var settingsObject = action.newUserData.settings;
          for(var y = 0; y < Object.keys(settingsObject).length; y++) {
            if(Object.keys(settingsObject)[y] === 'darkMode') {
              returnObject.user.settings.darkMode = settingsObject.darkMode;
            }
            if(Object.keys(settingsObject)[y] === 'language') {
              returnObject.user.settings.language = settingsObject.language;

              // leere die Sections damit die sections mit der neuen sprache und nicht einfach nur unter die 
              // alten rangehängt werden sonder nur die Artikel der neuen Sprache angezeigt wird
              returnObject.sections = [];
            }
            if(Object.keys(settingsObject)[y] === 'country') {
              console.log('in country')
              returnObject.user.settings.country = settingsObject.country;

              // leere die Sections damit die sections mit der neuen sprache und nicht einfach nur unter die 
              // alten rangehängt werden sonder nur die Artikel der neuen Sprache angezeigt wird
              returnObject.sections = [];
            }
            if(Object.keys(settingsObject)[y] === 'readArticleWithoutPictures') {
              returnObject.user.settings.readArticleWithoutPictures = settingsObject.readArticleWithoutPictures;
            }
          }
        }
      }
      return returnObject

    default:
      return state;
  }
}