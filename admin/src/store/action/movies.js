import { fetchHelper } from "../../helpers/fetch";

import {
    MOVIES_SUCCESS,
    MOVIES_ERROR,
    MOVIES_LOADING,
    MOVIE_CREATE_SUCCESS,
    MOVIE_CREATE_ERROR,
    MOVIE_CREATE_LOADING,
    MOVIE_UPDATE_SUCCESS,
    MOVIE_UPDATE_ERROR,
    MOVIE_UPDATE_LOADING
} from "./actionTypes";

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

export const createMovieSuccess = (payload) => ({
    type: MOVIE_CREATE_SUCCESS,
    payload
})

export const createMovieError = (payload) => ({
    type: MOVIE_CREATE_ERROR,
    payload
})

export const createMovieLoading = (payload) => ({
    type: MOVIE_CREATE_LOADING,
    payload
})

export const updateMovieSuccess = (payload) => ({
    type: MOVIE_UPDATE_SUCCESS,
    payload
})

export const updateMovieError = (payload) => ({
    type: MOVIE_UPDATE_ERROR,
    payload
})

export const updateMovieLoading = (payload) => ({
    type: MOVIE_UPDATE_LOADING,
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

export const createMovie = (payload) => {
    return async (dispatch, getState) => {
        try {
            dispatch(createMovieLoading(true))
            const response = await fetchHelper("movies/add", "POST", payload)
            dispatch(createMovieSuccess(response))
            dispatch(fetchMovies())
        } catch (err) {
            dispatch(createMovieError(err))
        } finally {
            dispatch(createMovieLoading(false))
        }
    }
}

export const updateMovie = (payload) => {
    return async (dispatch, getState) => {
        try {
            dispatch(updateMovieLoading(true))
            const response = await fetchHelper(`movies/update/${payload?.id}`, "POST", payload)
            dispatch(updateMovieSuccess(response))
            dispatch(fetchMovies())
        } catch (err) {
            dispatch(updateMovieError(err))
        } finally {
            dispatch(updateMovieLoading(false))
        }
    }
}