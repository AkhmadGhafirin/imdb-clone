import { errorHelper } from "../../helpers/error";
import { fetchHelper } from "../../helpers/fetch";

import {
    USERS_LOGIN_SUCCESS,
    USERS_LOGIN_LOADING,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_LOADING
} from "./actionTypes";

export const loginUserSuccess = (payload) => ({
    type: USERS_LOGIN_SUCCESS,
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

export const registerUserLoading = (payload) => ({
    type: USER_REGISTER_LOADING,
    payload
})

export const loginUser = (payload) => {
    return async (dispatch) => {
        try {
            dispatch(loginUserLoading(true))
            const response = await fetchHelper("login", "POST", payload)
            localStorage.setItem("access_token", response?.access_token);
            dispatch(loginUserSuccess(response))
        } catch (err) {
            throw errorHelper(err)
        } finally {
            dispatch(loginUserLoading(false))
        }
    }
}

export const registerUser = (payload) => {
    return async (dispatch) => {
        try {
            dispatch(registerUserLoading(true))
            const response = await fetchHelper("register", "POST", payload)
            dispatch(registerUserSuccess(response))
        } catch (err) {
            throw errorHelper(err)
        } finally {
            dispatch(registerUserLoading(false))
        }
    }
}

// export const logout = () => {
//     return
// }