import {Dispatch} from "react";
import {AppState} from "../userTypes";
import axios from 'axios'

import {appGetUsers, ERROR} from "../action";
import {UsersFetch} from "./usersFetch";


export const UpdateUser =  (data: AppState.userTypes | null)  => {
    return async (dispatch: Dispatch<AppState.userAction.All>) => {

        console.log(data?.data)
        try {

            // await axios.put("http://178.128.196.163:3000/api/records", data, ) //todo выбрать лучший метод
            await axios({
                method: 'post',
                url: `http://178.128.196.163:3000/api/records/${data?._id}`,
                data: data?.data
            });
            const response = await axios.get("http://178.128.196.163:3000/api/records")

            const res:AppState.userTypes[] = response.data

            dispatch(appGetUsers(res))
        } catch (e) {

            dispatch(ERROR("404"))

        }

    }
}
