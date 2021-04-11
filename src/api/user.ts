import {AppState} from "../store/app/userTypes";
import axios from "axios";


export const apiUserGetID = async (params: AppState.userTypes) => {

    const response = await axios.get(`http://178.128.196.163:3000/api/records/${params._id}`)
    return response.data
}