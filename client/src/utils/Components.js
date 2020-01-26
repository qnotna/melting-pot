import { setSections, setLoadingState, setPagingData } from '../actions';
import store from '../store';


// Components Enum defining all parent components that 
// could be renderd inside of the Home component
export const Components = {
    HOME: 'HOME',
    BUSINESS: 'BUSINESS',
    ENTERTAINMENT: 'ENTERTAINMENT',
    HEALTH: 'HEALTH',
    SCIENCE: 'SCIENCE',
    SPORTS: 'SPORTS',
    TECHNOLOGY: 'TECHNOLOGY',
    SETTINGS: 'SETTINGS',
    SEARCH_RESULTS: 'SEARCH_RESULTS',
    READER_VIEW: 'READER_VIEW'
}

export function clearContentView() {
    store.dispatch(setSections([]));
    store.dispatch(setLoadingState(true));
}

export function setInitData(data) {
    if(data.articles) {
        store.dispatch(setPagingData({ 
            currentPage: 1,
            currentResults: data.articles.length,
            totalResults: data.totalResults
        }))
    }
    store.dispatch(setLoadingState(false));
}