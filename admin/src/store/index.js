import { applyMiddleware, legacy_createStore as createStore } from "redux"
import rootReducer from "./reducer"
import thunk from "redux-thunk"

const logger = (store) => (next) => (action) => {
    console.log("dispatching", action)
    let result = next(action)
    console.log("next state", store.getState())
    return result
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store