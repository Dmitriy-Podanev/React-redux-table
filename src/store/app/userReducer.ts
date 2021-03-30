import {Reducer} from 'redux'
import {AppState} from "./types";
import {AppActionEnum} from "./appActionEnum";

const initState: AppState.State = {
    isLoading: false,
    dataM: [],
    editId: -1,
    res: []
}

export const userReducer: Reducer<AppState.State, AppState.userAction.All> = (state = initState, action: AppState.userAction.All): AppState.State => {
    switch (action.type) {
        case AppActionEnum.getUsers:
            return{
                ...state
            }
        case AppActionEnum.addUser:
            return {
                ...state, isLoading: true,

            }
        case AppActionEnum.changeUser:
            return {
                ...state

            }
        case AppActionEnum.deleteUser:
            return{
                ...state, isLoading:true,
            }

    }
    return state
}

