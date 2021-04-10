import {Action as ActionRedux} from 'redux'
import {AppActionEnum} from "./appActionEnum";


export declare namespace AppState {


    interface userTypes{
        _id: number,
        data:{
            name:string,
            email:string,
            age:string
        }

    }

    interface userTypesAddForm{
        _id: number
        name:string,
        email:string,
        age:string
    }

    interface State {
        isLoading: boolean;
        data?: userTypes[]
        error: string
        // dataM: object[]
    }






    namespace userAction {
        type getUsers = ActionRedux<AppActionEnum.getUsers> & { payload: userTypes[] }
        type addUser = ActionRedux<AppActionEnum.addUser> & { payload: object }
        type deleteUser = ActionRedux<AppActionEnum.deleteUser> & { payload: number }
        type changeUser = ActionRedux<AppActionEnum.changeUser> & { payload: object }
        type ERROR = ActionRedux<AppActionEnum.ERROR> & {payload: string}
        type getUserid = ActionRedux<AppActionEnum.getUserid> & {payload: userTypesAddForm}

        type All = getUsers | addUser | deleteUser | changeUser | ERROR | getUserid
    }
}
