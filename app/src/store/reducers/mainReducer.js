import { FETCHING_COUNTRY_START, FETCH_COUNTRY_SUCCESS } from '../actions'

export const initialState = {
    countries: [],
    isLoading: false,
    error: ''
};


export const mainReducer = (state = initialState, action) => {
    switch(action.type){
    case FETCHING_COUNTRY_START:
        return {
            ...state,
            isLoading: true,
            error: ""
        };
        case FETCH_COUNTRY_SUCCESS:
            console.log('Success path is running')
        return {
            ...state,
            isLoading: false,
            countries: action.payload
        };
        default:
        return state;
    };
};
