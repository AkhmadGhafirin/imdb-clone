import { errorHelper } from "../../helpers/error";
import { fetchHelper } from "../../helpers/fetch";

import {
    MOVIES_SUCCESS,
    MOVIES_LOADING,
    MOVIE_SUCCESS,
    MOVIE_LOADING,
    MOVIE_DELETE_SUCCESS,
    MOVIE_DELETE_LOADING,
    MOVIE_CREATE_SUCCESS,
    MOVIE_CREATE_LOADING,
    MOVIE_UPDATE_SUCCESS,
    MOVIE_UPDATE_LOADING
} from "./actionTypes";

export const fetchMoviesSuccess = (payload) => ({
    type: MOVIES_SUCCESS,
    payload
})

export const fetchMoviesLoading = (payload) => ({
    type: MOVIES_LOADING,
    payload
})

export const fetchMovieByIdSuccess = (payload) => ({
    type: MOVIE_SUCCESS,
    payload
})

export const fetchMovieByIdLoading = (payload) => ({
    type: MOVIE_LOADING,
    payload
})

export const deleteMovieSuccess = (payload) => ({
    type: MOVIE_DELETE_SUCCESS,
    payload
})

export const deleteMovieLoading = (payload) => ({
    type: MOVIE_DELETE_LOADING,
    payload
})

export const createMovieSuccess = (payload) => ({
    type: MOVIE_CREATE_SUCCESS,
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

export const updateMovieLoading = (payload) => ({
    type: MOVIE_UPDATE_LOADING,
    payload
})

export const fetchMovies = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchMoviesLoading(true))
            const response = await fetchHelper("movies")
            dispatch(fetchMoviesSuccess(response))
        } catch (err) {
            throw errorHelper(err)
        } finally {
            dispatch(fetchMoviesLoading(false))
        }
    }
}

export const fetchMovieById = (id) => {
    return async (dispatch) => {
        try {
            dispatch(fetchMovieByIdLoading(true))
            const response = await fetchHelper(`movies/${id}`)
            // dispatch(fetchMovieByIdSuccess(response))
            return response
        } catch (err) {
            throw errorHelper(err)
        } finally {
            dispatch(fetchMovieByIdLoading(false))
        }
    }
}

export const createMovie = (payload) => {
    return async (dispatch) => {
        try {
            dispatch(createMovieLoading(true))
            const response = await fetchHelper("movies", "POST", payload)
            dispatch(createMovieSuccess(response))
            dispatch(fetchMovies())
        } catch (err) {
            throw errorHelper(err)
        } finally {
            dispatch(createMovieLoading(false))
        }
    }
}

export const updateMovie = (payload, id) => {
    return async (dispatch) => {
        try {
            dispatch(updateMovieLoading(true))
            const response = await fetchHelper(`movies/${id}`, "PUT", payload)
            dispatch(updateMovieSuccess(response))
            dispatch(fetchMovies())
        } catch (err) {
            throw errorHelper(err)
        } finally {
            dispatch(updateMovieLoading(false))
        }
    }
}

export const deleteMovie = (id) => {
    return async (dispatch) => {
        try {
            dispatch(deleteMovieLoading(true))
            const response = await fetchHelper(`movies/${id}`, "DELETE")
            dispatch(deleteMovieSuccess(response))
            dispatch(fetchMovies())
        } catch (err) {
            throw errorHelper(err)
        } finally {
            dispatch(deleteMovieLoading(false))
        }
    }
}