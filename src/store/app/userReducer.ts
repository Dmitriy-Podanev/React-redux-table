import {Reducer} from 'redux'
import {AppState} from "./userTypes";
import {AppActionEnum} from "./appActionEnum";

const initState: AppState.State = {
    isLoading: false,
    data:[],
    error:""
    // dataM:[]
    }
    

export const userReducer: Reducer<AppState.State, AppState.userAction.All> = (state = initState, action: AppState.userAction.All): AppState.State => {
    switch (action.type) {
        case AppActionEnum.getUsers:
            return{
                ...state,
               data: action.payload

            }
        case AppActionEnum.getUserid:
            return {
                ...state.data?.find(obj =>obj._id === action.payload._id )

            }

    }
    return state
}

