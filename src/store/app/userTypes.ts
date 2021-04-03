
import { Action as ActionRedux } from 'redux'
import {AppActionEnum} from "./appActionEnum";


export declare namespace AppState{
    interface State {
        isLoading: boolean;
        dataM: object[];
        editId: number;
        res:object[];


    }


    namespace userAction{
        type getUsers = ActionRedux<AppActionEnum.getUsers> & {payload:object}
        type addUser = ActionRedux<AppActionEnum.addUser> & {payload:object}
        type deleteUser = ActionRedux<AppActionEnum.deleteUser> & {payload:number}
        type changeUser = ActionRedux<AppActionEnum.changeUser> & {payload:object}

        type All = getUsers | addUser | deleteUser | changeUser
    }
}
