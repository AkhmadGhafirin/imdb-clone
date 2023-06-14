import { combineReducers } from "redux"
import userReducer from "./users"
import movieReducer from "./movies"
import genreReducer from "./genres"

const rootReducer = combineReducers({
    users: userReducer,
    movies: movieReducer,
    genres: genreReducer
})

export default rootReducer