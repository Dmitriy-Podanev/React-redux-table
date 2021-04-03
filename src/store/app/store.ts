import{applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk";
import { rootReducer } from "../rootReduser";
import { userReducer } from "./userReducer";



export const store  = createStore(rootReducer,applyMiddleware(thunk));