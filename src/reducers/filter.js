import { SET_FILTER, CLEAR_FILTER } from '../actionTypes';

export default function filterReducer(state = [], action) {
    switch (action.type) {
        case SET_FILTER: 
            return action.filter
        case CLEAR_FILTER:
            return false;
        default:
            return state;
    }
};