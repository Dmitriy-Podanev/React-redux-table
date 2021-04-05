import {Reducer} from 'redux'
import {AppState} from "./userTypes";
import {AppActionEnum} from "./appActionEnum";

const initState: AppState.State = {
    isLoading: false,
    data:{
        userId: -1,
        id: -1,
        title:"", 
        body:""},
    dataM:[]
    }
    

export const userReducer: Reducer<AppState.State, AppState.userAction.All> = (state = initState, action: AppState.userAction.All): AppState.State => {
    switch (action.type) {
        case AppActionEnum.getUsers:
            return{
                ...state,
               dataM: action.payload

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

