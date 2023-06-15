import { fetchHelper } from "../../helpers/fetch";

import {
    MOVIES_SUCCESS,
    MOVIES_ERROR,
    MOVIES_LOADING,
    MOVIE_SUCCESS,
    MOVIE_ERROR,
    MOVIE_LOADING
} from "./types";

export const fetchMoviesSuccess = (payload) => ({
    type: MOVIES_SUCCESS,
    payload
})

export const fetchMoviesError = (payload) => ({
    type: MOVIES_ERROR,
    payload
})

export const fetchMoviesLoading = (payload) => ({
    type: MOVIES_LOADING,
    payload
})

export const fetchMovieDetailSuccess = (payload) => ({
    type: MOVIE_SUCCESS,
    payload
})

export const fetchMovieDetailError = (payload) => ({
    type: MOVIE_ERROR,
    payload
})

export const fetchMovieDetailLoading = (payload) => ({
    type: MOVIE_LOADING,
    payload
})

export const fetchMovies = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchMoviesLoading(true))
            const response = await fetchHelper("movies")
            dispatch(fetchMoviesSuccess(response))
        } catch (err) {
            dispatch(fetchMoviesError(err))
        } finally {
            dispatch(fetchMoviesLoading(false))
        }
    }
}

export const fetchMovieDetail = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchMovieDetailLoading(true))
            const response = await fetchHelper("movies/slug")
            dispatch(fetchMovieDetailSuccess(response))
        } catch (err) {
            dispatch(fetchMovieDetailError(err))
        } finally {
            dispatch(fetchMovieDetailLoading(false))
        }
    }
}