import { AppActionEnum } from "./appActionEnum";
import { AppState } from "./userTypes";





export const appGetUsers = (payload:AppState.userTypes[]): AppState.userAction.getUsers =>({type: AppActionEnum.getUsers, payload})//todo payload:[]
export const appAddUser = (payload: object): AppState.userAction.addUser =>({type: AppActionEnum.addUser ,payload })
export const appChangeUser = (payload:object): AppState.userAction.changeUser =>({type: AppActionEnum.changeUser, payload})
export const appDeleteUser = (payload:number): AppState.userAction.deleteUser =>({type: AppActionEnum.deleteUser,payload})


