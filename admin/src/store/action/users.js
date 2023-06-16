import { fetchHelper } from "../../helpers/fetch";

import {
    USERS_LOGIN_SUCCESS,
    USERS_LOGIN_ERROR,
    USERS_LOGIN_LOADING,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_ERROR,
    USER_REGISTER_LOADING
} from "./actionTypes";

export const loginUserSuccess = (payload) => ({
    type: USERS_LOGIN_SUCCESS,
    payload
})

export const loginUserError = (payload) => ({
    type: USERS_LOGIN_ERROR,
    payload
})

export const loginUserLoading = (payload) => ({
    type: USERS_LOGIN_LOADING,
    payload
})

export const registerUserSuccess = (payload) => ({
    type: USER_REGISTER_SUCCESS,
    payload
})

export const registerUserError = (payload) => ({
    type: USER_REGISTER_ERROR,
    payload
})

export const registerUserLoading = (payload) => ({
    type: USER_REGISTER_LOADING,
    payload
})

export const loginUser = (payload) => {
    return async (dispatch, getState) => {
        try {
            dispatch(loginUserLoading(true))
            const response = await fetchHelper("users/login", "POST", payload)
            dispatch(loginUserSuccess(response))
        } catch (err) {
            dispatch(loginUserError(err))
        } finally {
            dispatch(loginUserLoading(false))
        }
    }
}

export const registerUser = (payload) => {
    return async (dispatch, getState) => {
        try {
            dispatch(registerUserLoading(true))
            const response = await fetchHelper("users/register", "POST", payload)
            dispatch(registerUserSuccess(response))
        } catch (err) {
            dispatch(registerUserError(err))
        } finally {
            dispatch(registerUserLoading(false))
        }
    }
}