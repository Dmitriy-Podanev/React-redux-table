
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
        type getUsers = ActionRedux<AppActionEnum.getUsers> & {payload:[]}
        type addUser = ActionRedux<AppActionEnum.addUser> & {payload:undefined}
        type deleteUser = ActionRedux<AppActionEnum.deleteUser> & {payload:number}
        type changeUser = ActionRedux<AppActionEnum.changeUser> & {payload:undefined}

        type All = getUsers | addUser | deleteUser | changeUser
    }
}
