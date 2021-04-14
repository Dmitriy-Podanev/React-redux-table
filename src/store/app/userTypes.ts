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

        name:string,
        email:string,
        age:string
    }

    interface State {
        loading: boolean;
        data?: userTypes[]
        error: string
    }






    namespace userAction {
        type getUsers = ActionRedux<AppActionEnum.getUsers> & { payload: userTypes[] }
        type addUser = ActionRedux<AppActionEnum.addUser> & { payload: object }
        type deleteUser = ActionRedux<AppActionEnum.deleteUser> & { payload: number }
        type changeUser = ActionRedux<AppActionEnum.changeUser> & { payload: object }
        type ERROR = ActionRedux<AppActionEnum.ERROR> & {payload: string}


        type All = getUsers | addUser | deleteUser | changeUser | ERROR
    }
}
