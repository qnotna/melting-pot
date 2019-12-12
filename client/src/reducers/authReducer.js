// Reducers are pure functions that specify how application state 
// should change in response to an action. 
// Reducers respond with the new state, which is passed to our store and, 
// in turn, our UI.

// Import all our actions from our types.js file
import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";

const isEmpty = require("is-empty");
const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};
export default function (state = initialState, action) {
    // Define how state should change based on actions with a switch statement
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
