
import { Action as ActionRedux } from 'redux'
import {AppAction} from "./appAction";


export declare namespace Appstate{
    interface State {
        isLoading: boolean;
        dataM: object[];
        editId: number;
        res:object[];


    }
}

namespace Action{
    type AddUser = ActionRedux<AppAction.addUser> & {}
}
