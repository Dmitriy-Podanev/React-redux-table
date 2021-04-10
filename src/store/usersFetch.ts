import {Dispatch} from "react";
import {AppState} from "./app/userTypes";
import axios from 'axios'

import {appGetUsers, ERROR} from "./app/action";
import {AppActionEnum} from "./app/appActionEnum";



export const UsersFetch = () => {
    return async (dispatch: Dispatch<AppState.userAction.All>) => {
        try {

           // const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
           const response = await axios.get("http://178.128.196.163:3000/api/records")
            console.log(typeof response.data)

            // dispatch(appGetUsers(response.data))
            const data:AppState.userTypes[] = response.data

            dispatch(appGetUsers(data))

        } catch (e) {
             dispatch(ERROR("404"))

        }
    }
}

