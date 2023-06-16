import {
    GENRES_LOADING,
    GENRES_SUCCESS,
    GENRE_CREATE_LOADING,
    GENRE_CREATE_SUCCESS
} from "../action/actionTypes"

const initialState = {
    genres: [],
    loading: false,
    errorMessage: '',
    isError: false
}

const genreReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENRES_SUCCESS:
            return {
                ...state,
                genres: action.payload,
                loading: false
            }
        case GENRE_CREATE_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case GENRES_LOADING:
        case GENRE_CREATE_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default genreReducer