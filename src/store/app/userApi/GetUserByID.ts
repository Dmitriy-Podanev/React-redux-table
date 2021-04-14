import {AppState} from "../userTypes";
import axios from 'axios'
import {log} from "util";




export const GetUserByID = async (id: string): Promise<AppState.userTypesAddForm> => {
    // const dispatch = useDispatch();


    const data = await axios.get(`http://178.128.196.163:3000/api/records/${id}`)




    return data.data


};

