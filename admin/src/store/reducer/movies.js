import { MOVIES_ERROR, MOVIES_LOADING, MOVIES_SUCCESS, MOVIE_CREATE_ERROR, MOVIE_CREATE_LOADING, MOVIE_CREATE_SUCCESS, MOVIE_UPDATE_ERROR, MOVIE_UPDATE_LOADING, MOVIE_UPDATE_SUCCESS } from "../action/types";

const initialState = {
    movies: [],
    loading: false,
    error: ''
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                error: '',
                loading: false
            }
        case MOVIE_CREATE_SUCCESS:
            return {
                ...state,
                movies: [],
                error: '',
                loading: false
            }
        case MOVIE_UPDATE_SUCCESS:
            return {
                ...state,
                movies: [],
                error: '',
                loading: false
            }
        case MOVIES_ERROR:
        case MOVIE_CREATE_ERROR:
        case MOVIE_UPDATE_ERROR:
            return {
                ...state,
                movies: [],
                error: action.payload,
                loading: false
            }
        case MOVIES_LOADING:
        case MOVIE_CREATE_LOADING:
        case MOVIE_UPDATE_LOADING:
            return {
                ...state,
                error: '',
                loading: action.payload
            }
        default:
            return state
    }
}

export default movieReducer