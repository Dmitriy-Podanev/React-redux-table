import { type } from "node:os";
import{applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk";
import { rootReducer } from "../rootReduser";



export const store  = createStore(rootReducer,applyMiddleware(thunk));

export type RootStore = ReturnType<typeof rootReducer>
