import {
    MOVIES_ERROR,
    MOVIES_LOADING,
    MOVIES_SUCCESS,
    MOVIE_ERROR,
    MOVIE_LOADING,
    MOVIE_SUCCESS
} from "../action/types";

const initialState = {
    movies: [],
    movie: {},
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
        case MOVIE_SUCCESS:
            return {
                ...state,
                movies: [],
                movie: action.payload,
                error: '',
                loading: false
            }
        case MOVIES_ERROR:
        case MOVIE_ERROR:
            return {
                ...state,
                movies: [],
                movie: {},
                error: action.payload,
                loading: false
            }
        case MOVIES_LOADING:
        case MOVIE_LOADING:
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