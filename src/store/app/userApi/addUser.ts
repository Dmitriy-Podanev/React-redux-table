import {Dispatch} from "react";
import {AppState} from "../userTypes";
import axios from 'axios'

import {appGetUsers, ERROR} from "../action";




export const addUser = (data: object) => {
    return async (dispatch: Dispatch<AppState.userAction.All>) => {
        try {

            // const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            await axios.put("http://178.128.196.163:3000/api/records",data)
            // console.log(typeof response.data)

            // dispatch(appGetUsers(response.data))
            // const data:AppState.userTypes[] = response.data

            // dispatch(appGetUsers(data))

        } catch (e) {
            dispatch(ERROR("404"))

        }
    }
}

