import {
    USERS_LOGIN_LOADING,
    USERS_LOGIN_SUCCESS,
    USER_REGISTER_LOADING,
    USER_REGISTER_SUCCESS
} from "../action/actionTypes"

const initialState = {
    loading: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_SUCCESS:
        case USERS_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case USERS_LOGIN_LOADING:
        case USER_REGISTER_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default userReducer