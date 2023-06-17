import {
    MOVIES_LOADING,
    MOVIES_SUCCESS,
    MOVIE_LOADING,
    MOVIE_SUCCESS
} from "../action/actionTypes";

const initialState = {
    movies: [],
    loading: false,
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case MOVIE_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case MOVIES_LOADING:
        case MOVIE_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default movieReducer