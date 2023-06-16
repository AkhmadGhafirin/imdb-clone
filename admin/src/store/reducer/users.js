import {
    USERS_LOGIN_ERROR,
    USERS_LOGIN_LOADING,
    USERS_LOGIN_SUCCESS,
    USER_REGISTER_ERROR,
    USER_REGISTER_LOADING,
    USER_REGISTER_SUCCESS
} from "../action/actionTypes"

const initialState = {
    user: {},
    isLoggedIn: false,
    loading: false,
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                error: '',
                loading: false
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                error: '',
                loading: false
            }
        case USERS_LOGIN_ERROR:
        case USER_REGISTER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case USERS_LOGIN_LOADING:
        case USER_REGISTER_LOADING:
            return {
                ...state,
                error: '',
                loading: action.payload
            }
        default:
            return state
    }
}

export default userReducer