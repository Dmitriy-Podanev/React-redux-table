import { combineReducers } from "redux";
import { userReducer } from "./app/userReducer";




export const rootReducer = combineReducers({
    user: userReducer
})