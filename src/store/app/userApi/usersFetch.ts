import {Dispatch} from "react";
import {AppState} from "../userTypes";
import axios from 'axios'

import {appGetUsers, ERROR} from "../action";




export const UsersFetch = () => {
    return async (dispatch: Dispatch<AppState.userAction.All>) => {
        try {

           const response = await axios.get("http://178.128.196.163:3000/api/records")

            const data:AppState.userTypes[] = response.data

            dispatch(appGetUsers(data))

        } catch (e) {
             dispatch(ERROR("404"))

        }
    }
}

