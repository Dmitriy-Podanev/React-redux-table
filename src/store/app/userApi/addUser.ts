import {Dispatch} from "react";
import {AppState} from "../userTypes";
import axios from 'axios'

import {appGetUsers, ERROR} from "../action";
import {UsersFetch} from "./usersFetch";


export const addUser =  (data: object)  => {
    return async (dispatch: Dispatch<AppState.userAction.All>) => {

        try {

            
            await axios({
                method: 'PUT',
                url: 'http://178.128.196.163:3000/api/records',
                data: data
            });
            const response = await axios.get("http://178.128.196.163:3000/api/records")

            const res:AppState.userTypes[] = response.data

            dispatch(appGetUsers(res))
        } catch (e) {

            dispatch(ERROR("404"))

        }

    }
}
