import { Dispatch } from "react";
import { AppState } from "./app/types";
import axios from 'axios'
import { type } from "os";
import { appGetUsers } from "./app/action";




export const userFetch = () = >{
    return async (dispatch:Dispatch<AppState.userAction.getUsers>) => {
        try{
           const response  = await axios.get("http://178.128.196.163:3000/api/records");
           dispatch(appGetUsers) 
        }
        catch(e){}
    }
}