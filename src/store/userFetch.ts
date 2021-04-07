import {Dispatch} from "react";
import {AppState} from "./app/userTypes";
import axios from 'axios'

import {appGetUsers} from "./app/action";
import {AppActionEnum} from "./app/appActionEnum";



export const UserFetch = () => {
    return async (dispatch: Dispatch<AppState.userAction.All>) => {
        try {

           const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(typeof response.data)

            // dispatch(appGetUsers(response.data))
            const data:AppState.userTypes[] = response.data

            dispatch(appGetUsers(data))

        } catch (e) {
            // dispatch(AppActionEnum.ERROR)

        }
    }
}
