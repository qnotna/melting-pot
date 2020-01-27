import { Components } from '../utils/Components'

const initialState = {
    // User preferences used to build personalized sections
    user_preferences: {
        countries: ["de"]
    },

    // The Home component renders the NavBar, SideBar and 
    // the component specified by this property
    // Home is renderd as first by default
    content_component: Components.HOME,

    // Array containing the list of articles divided into 
    // different sections (e.g. "Hot", "Latest"...)
    sections: [],

    // Property used to load the article preview
    current_article: {},

    // Object containing extended search parameters used to be sent with the search request
    // possible fields are: q, sources, language, sortBy, pageSize 
    searchParams: {
        size: 20
    },

    // Check if Loading term is displayed
    isLoading: false,

    pagingData: {
        currentPage: 1,
        totalResults: 0,
        currentResults: 0
    }
};



export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_ARTICLE":
            return {
                ...state,
                current_article: action.article
            }

        case "ADD_SECTION":
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

        case "SET_LOADING_STATE":
            return {
                ...state,
                isLoading: action.isLoading
            }

        case "SET_PAGING_DATA":
            return {
                ...state,
                pagingData: action.pagingData
            }

        default:
            return state;
    }
}