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

export const setSearchInput = (search_input) => ({
    type: "SET_SEARCH_INPUT",
    search_input
})

export const setArticle = (article) => ({
    type: "SET_ARTICLE",
    article
})

export const setLoadingState = (isLoading) => ({
    type: "SET_LOADING_STATE",
    isLoading
})

export const setPagingData = (pagingData) => ({
    type: "SET_PAGING_DATA",
    pagingData
})

export const setSectionTags = (tags) => ({
    type: "SET_SECTION_TAGS",
    tags
})