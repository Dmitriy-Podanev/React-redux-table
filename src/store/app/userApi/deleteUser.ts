import {Dispatch} from "react";
import {AppState} from "../userTypes";
import axios from 'axios'

import {appGetUsers, ERROR} from "../action";


export const addUser =  (data: object)  => {
    return async (dispatch: Dispatch<AppState.userAction.All>) => {
        try {

            // await axios.put("http://178.128.196.163:3000/api/records", data, ) //todo выбрать лучший метод
            await axios({
                method: 'DELETE',
                url: `http://178.128.196.163:3000/api/records/${data}`
            });
        } catch (e) {

            dispatch(ERROR("404"))

        }

    }
}
