import { fetchHelper } from "../../helpers/fetch";

import {
    GENRES_SUCCESS,
    GENRES_ERROR,
    GENRES_LOADING,
    GENRE_CREATE_SUCCESS,
    GENRE_CREATE_ERROR,
    GENRE_CREATE_LOADING,
} from "./types";

export const fetchGenresSuccess = (payload) => ({
    type: GENRES_SUCCESS,
    payload
})

export const fetchGenresError = (payload) => ({
    type: GENRES_ERROR,
    payload
})

export const fetchGenresLoading = (payload) => ({
    type: GENRES_LOADING,
    payload
})

export const createGenreSuccess = (payload) => ({
    type: GENRE_CREATE_SUCCESS,
    payload
})

export const createGenreError = (payload) => ({
    type: GENRE_CREATE_ERROR,
    payload
})

export const createGenreLoading = (payload) => ({
    type: GENRE_CREATE_LOADING,
    payload
})

export const fetchGenres = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchGenresLoading(true))
            const response = await fetchHelper("genres")
            dispatch(fetchGenresSuccess(response))
        } catch (err) {
            dispatch(fetchGenresError(err))
        } finally {
            dispatch(fetchGenresLoading(false))
        }
    }
}

export const createGenre = (payload) => {
    return async (dispatch, getState) => {
        try {
            dispatch(createGenreLoading(true))
            const response = await fetchHelper("genres/add", "POST", payload)
            dispatch(createGenreSuccess(response))
        } catch (err) {
            dispatch(createGenreError(err))
        } finally {
            dispatch(createGenreLoading(false))
        }
    }
}