import { FETCHING_CHARACTER_START, FETCH_CHARACTER_SUCCESS } from '../actions'

export const initialState = {
    characters: [],
    isLoading: false,
    error: ''
};


export const mainReducer = (state = initialState, action) => {
    switch(action.type){
    case FETCHING_CHARACTER_START:
        return {
            ...state,
            isLoading: true,
            error: ""
        };
        case FETCH_CHARACTER_SUCCESS:
        return {
            ...state,
            isLoading: false,
            missions: action.payload
        };
        default:
        return state;
    };
};
