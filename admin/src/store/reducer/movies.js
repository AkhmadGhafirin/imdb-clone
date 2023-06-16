import {
    MOVIES_LOADING,
    MOVIES_SUCCESS,
    MOVIE_CREATE_LOADING,
    MOVIE_CREATE_SUCCESS,
    MOVIE_UPDATE_LOADING,
    MOVIE_UPDATE_SUCCESS
} from "../action/actionTypes";

const initialState = {
    movies: [],
    loading: false,
    isError: false,
    errorMessage: ''
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case MOVIE_CREATE_SUCCESS:
        case MOVIE_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case MOVIES_LOADING:
        case MOVIE_CREATE_LOADING:
        case MOVIE_UPDATE_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default movieReducer