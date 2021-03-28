
import { Action as ActionRedux } from 'redux'
import {AppActionEnum} from "./appActionEnum";


export declare namespace AppState{
    interface State {
        isLoading: boolean;
        dataM: object[];
        editId: number;
        res:object[];


    }


    namespace Action{
        type addUser = ActionRedux<AppActionEnum.addUser>
        type deleteUser = ActionRedux<AppActionEnum.deleteUser>
        type changeUser = ActionRedux<AppActionEnum.changeUser>

        type All = addUser | deleteUser | changeUser
    }
}
