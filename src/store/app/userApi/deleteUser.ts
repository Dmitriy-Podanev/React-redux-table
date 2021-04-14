
import axios from 'axios'

import {appGetUsers, ERROR} from "../action";
import {useDispatch} from "react-redux";
import {Dispatch} from "react";
import {AppState} from "../userTypes";
import {UsersFetch} from "./usersFetch";
import {browserHistory} from "../../../browserHistory";



export const deleteUser =  (id: number)  => {
    return async (dispatch:Dispatch<AppState.userAction.All>) => {
        try {

            // await axios.put("http://178.128.196.163:3000/api/records", data, ) //todo выбрать лучший метод
            await axios({
                method: 'DELETE',
                url: `http://178.128.196.163:3000/api/records/${id}`
            });

            const response = await axios.get("http://178.128.196.163:3000/api/records")

            const data:AppState.userTypes[] = response.data

            dispatch(appGetUsers(data))
            browserHistory.push("/")
        } catch (e) {

            dispatch(ERROR("404"))

        }
    }

}
