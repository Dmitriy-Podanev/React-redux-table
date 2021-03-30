import {Reducer} from 'redux'
import {AppState} from "./types";
import {AppActionEnum} from "./appActionEnum";

const initState: AppState.State = {
    isLoading: false,
    dataM: [],
    editId: -1,
    res: []
}

export const AppReducer: Reducer<AppState.State, AppState.Action.All> = (state = initState, action) => {
    switch (action.type) {
        case AppActionEnum.addUser:
            return {
                ...state, isLoading: true,

            }
        case AppActionEnum.changeUser:
            return {
                ...state, isLoading: true,

            }

    }
    return state
}

