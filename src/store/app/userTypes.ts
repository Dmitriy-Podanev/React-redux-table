import {Action as ActionRedux} from 'redux'
import {AppActionEnum} from "./appActionEnum";


export declare namespace AppState {

    interface userTypes{
        userId: number,
        id: number,
        title: string,
        body: string
    }


    interface State {
        isLoading: boolean;
        data?: userTypes[]
        // dataM: object[]
    }






    namespace userAction {
        type getUsers = ActionRedux<AppActionEnum.getUsers> & { payload: userTypes[] }
        type addUser = ActionRedux<AppActionEnum.addUser> & { payload: object }
        type deleteUser = ActionRedux<AppActionEnum.deleteUser> & { payload: number }
        type changeUser = ActionRedux<AppActionEnum.changeUser> & { payload: object }
        type ERROR = ActionRedux<AppActionEnum.ERROR>

        type All = getUsers | addUser | deleteUser | changeUser | ERROR
    }
}
