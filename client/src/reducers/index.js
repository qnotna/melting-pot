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

    case "SET_SEARCH_INPUT":
      return {
        ...state,
        search_input: action.search_input
      }

    case "SET_CONTENT_COMPONENT":
      return {
        ...state,
        content_component: action.component
      }

    default:
      return state;
  }
}