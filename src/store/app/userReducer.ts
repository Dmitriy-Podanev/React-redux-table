import {Reducer} from 'redux'
import {AppState} from "./userTypes";
import {AppActionEnum} from "./appActionEnum";

const initState: AppState.State = {
    loading: false,
    data:[],
    error:""
    }
    

export const userReducer: Reducer<AppState.State, AppState.userAction.All> = (state = initState, action: AppState.userAction.All): AppState.State => {
    switch (action.type) {
        case AppActionEnum.getUsers:
            return{
                ...state,
               data: action.payload

            }
        case AppActionEnum.ERROR:
            return {
                ...state,
                error:action.payload
            }
    }
    return state
}

