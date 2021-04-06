import {Action as ActionRedux} from 'redux'
import {AppActionEnum} from "./appActionEnum";


export declare namespace AppState {
    interface State {
        isLoading: boolean;
        data?: {
            userId: number,
            id: number
            title: string,
            body: string
        }
        dataM: object[]


    }


    namespace userAction {
        type getUsers = ActionRedux<AppActionEnum.getUsers> & { payload: object[] }
        type addUser = ActionRedux<AppActionEnum.addUser> & { payload: object }
        type deleteUser = ActionRedux<AppActionEnum.deleteUser> & { payload: number }
        type changeUser = ActionRedux<AppActionEnum.changeUser> & { payload: object }

        type All = getUsers | addUser | deleteUser | changeUser
    }
}
