import { AppActionEnum } from "./appActionEnum";
import { AppState } from "./types";





export const appGetUsers = (): AppState.userAction.getUsers =>({type: AppActionEnum.getUsers, payload:[]})
export const appAddUser = (): AppState.userAction.addUser =>({type: AppActionEnum.addUser ,payload: })
export const appChangeUser = (): AppState.userAction.changeUser =>({type: AppActionEnum.changeUser, payload:})
export const appDeleteUser = (): AppState.userAction.deleteUser =>({type: AppActionEnum.deleteUser,payload:})