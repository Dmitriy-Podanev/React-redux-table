import { Dispatch } from "react";
import { AppState } from "./app/userTypes";
import axios from 'axios'
import { type } from "os";
import { appGetUsers } from "./app/action";
import { store } from "./app/store";
import { LOADIPHLPAPI } from "node:dns";





export const UserFetch = ()=>{
    return async (dispatch :Dispatch<AppState.userAction.All>) =>{
        try{
        
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch(appGetUsers(response.data))

        }
        catch(e){
            console.log("что-то не так ");
            
        }
    }
}
