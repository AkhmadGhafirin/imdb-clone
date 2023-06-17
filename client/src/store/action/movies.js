import { fetchHelper } from "../../helpers/fetch";
import { errorHelper } from "../../helpers/error";

import {
    MOVIES_SUCCESS,
    MOVIES_LOADING,
    MOVIE_SUCCESS,
    MOVIE_LOADING
} from "./actionTypes";

export const fetchMoviesSuccess = (payload) => ({
    type: MOVIES_SUCCESS,
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
            throw errorHelper(err)
        } finally {
            dispatch(fetchMoviesLoading(false))
        }
    }
}

export const fetchMovieDetail = (slug) => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchMovieDetailLoading(true))
            const response = await fetchHelper(`movies/${slug}`)
            // dispatch(fetchMovieDetailSuccess(response))
            return response
        } catch (err) {
            throw errorHelper(err)
        } finally {
            dispatch(fetchMovieDetailLoading(false))
        }
    }
}