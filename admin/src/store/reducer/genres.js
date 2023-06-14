import { GENRES_ERROR, GENRES_LOADING, GENRES_SUCCESS, GENRE_CREATE_ERROR, GENRE_CREATE_LOADING, GENRE_CREATE_SUCCESS } from "../action/types"

const initialState = {
    genres: [],
    loading: false,
    error: ''
}

const genreReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENRES_SUCCESS:
            return {
                ...state,
                genres: action.payload,
                error: '',
                loading: false
            }
        case GENRE_CREATE_SUCCESS:
            return {
                ...state,
                genres: [],
                error: '',
                loading: false
            }
        case GENRES_ERROR:
        case GENRE_CREATE_ERROR:
            return {
                ...state,
                genres: [],
                error: action.payload,
                loading: false
            }
        case GENRES_LOADING:
        case GENRE_CREATE_LOADING:
            return {
                ...state,
                error: '',
                loading: action.payload
            }
        default:
            return state
    }
}

export default genreReducer