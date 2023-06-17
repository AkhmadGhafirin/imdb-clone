import { errorHelper } from "../../helpers/error";
import { fetchHelper } from "../../helpers/fetch";

import {
    GENRES_SUCCESS,
    GENRES_LOADING,
    GENRE_SUCCESS,
    GENRE_LOADING,
    GENRE_CREATE_SUCCESS,
    GENRE_CREATE_LOADING,
    GENRE_UPDATE_SUCCESS,
    GENRE_UPDATE_LOADING,
    GENRE_DELETE_SUCCESS,
    GENRE_DELETE_LOADING,
} from "./actionTypes";

export const fetchGenresSuccess = (payload) => ({
    type: GENRES_SUCCESS,
    payload
})

export const fetchGenresLoading = (payload) => ({
    type: GENRES_LOADING,
    payload
})

export const fetchGenreByIdSuccess = (payload) => ({
    type: GENRE_SUCCESS,
    payload
})

export const fetchGenreByIdLoading = (payload) => ({
    type: GENRE_LOADING,
    payload
})

export const createGenreSuccess = (payload) => ({
    type: GENRE_CREATE_SUCCESS,
    payload
})

export const createGenreLoading = (payload) => ({
    type: GENRE_CREATE_LOADING,
    payload
})

export const updateGenreSuccess = (payload) => ({
    type: GENRE_UPDATE_SUCCESS,
    payload
})

export const updateGenreLoading = (payload) => ({
    type: GENRE_UPDATE_LOADING,
    payload
})

export const deleteGenreSuccess = (payload) => ({
    type: GENRE_DELETE_SUCCESS,
    payload
})

export const deleteGenreLoading = (payload) => ({
    type: GENRE_DELETE_LOADING,
    payload
})

export const fetchGenres = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchGenresLoading(true))
            const response = await fetchHelper("genres")
            dispatch(fetchGenresSuccess(response))
        } catch (err) {
            throw errorHelper(err)
        } finally {
            dispatch(fetchGenresLoading(false))
        }
    }
}

export const fetchGenreById = (id) => {
    return async (dispatch) => {
        try {
            dispatch(fetchGenreByIdLoading(true))
            const response = await fetchHelper(`genres/${id}`)
            // dispatch(fetchGenreByIdSuccess(response))
            return response
        } catch (err) {
            throw errorHelper(err)
        } finally {
            dispatch(fetchGenreByIdLoading(false))
        }
    }
}

export const createGenre = (payload) => {
    return async (dispatch) => {
        try {
            dispatch(createGenreLoading(true))
            const response = await fetchHelper("genres", "POST", payload)
            // dispatch(createGenreSuccess(response))
            dispatch(fetchGenres())
        } catch (err) {
            throw errorHelper(err)
        } finally {
            dispatch(createGenreLoading(false))
        }
    }
}

export const updateGenre = (payload, id) => {
    return async (dispatch) => {
        try {
            dispatch(updateGenreLoading(true))
            const response = await fetchHelper(`genres/${id}`, "PUT", payload)
            // dispatch(updateGenreSuccess(response))
            dispatch(fetchGenres())
        } catch (err) {
            console.log(err, '<<<< error update genre');
            throw errorHelper(err)
        } finally {
            dispatch(updateGenreLoading(false))
        }
    }
}

export const deleteGenre = (id) => {
    return async (dispatch) => {
        try {
            dispatch(deleteGenreLoading(true))
            const response = await fetchHelper(`genres/${id}`, "DELETE")
            // dispatch(deleteGenreSuccess(response))
            dispatch(fetchGenres())
        } catch (err) {
            throw errorHelper(err)
        } finally {
            dispatch(deleteGenreLoading(false))
        }
    }
}