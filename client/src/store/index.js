import { applyMiddleware, legacy_createStore as createStore } from "redux"
import movieReducer from "./reducer/movies"
import thunk from "redux-thunk"

const logger = (store) => (next) => (action) => {
    console.log("dispatching", action)
    let result = next(action)
    console.log("next state", store.getState())
    return result
}

const store = createStore(movieReducer, applyMiddleware(logger, thunk))

export default store