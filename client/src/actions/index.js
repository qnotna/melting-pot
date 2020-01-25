export const setUser = (user) => ({
        type: "SET_USER",
        user
})

export const addSection = (section) => ({
    type: "ADD_SECTION",
    section
})

export const setSections = (sections) => ({
    type: "SET_SECTIONS",
    sections
})

export const setContentComponent = (component) => ({
    type: "SET_CONTENT_COMPONENT",
    component
})

export const setSearchParams = (searchParams) => ({
    type: "SET_SEARCH_PARAMS",
    searchParams
})

export const setNewUserData = (newUserData) => ({
    type: "SET_NEW_USER_DATA",
    newUserData
})
export const setSearchInput = (search_input) => ({
    type: "SET_SEARCH_INPUT",
    search_input
})

export const setArticle = (current_article) => ({
    type: "SET_ARTICLE",
    current_article
})

export const setLoadingState = (isLoading) => ({
    type: "SET_LOADING_STATE",
    isLoading
})

export const setPagingData = (pagingData) => ({
    type: "SET_PAGING_DATA",
    pagingData
})