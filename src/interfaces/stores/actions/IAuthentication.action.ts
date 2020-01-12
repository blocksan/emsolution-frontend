import { IDefaultFailedAPi } from "../../common/IDefaultApi";

export interface ILogInFailed extends IDefaultFailedAPi {}

export interface ILogInSuccess {
    status: true,
    data:{
        isCheckedInRecently: boolean, //get the list of the checkedIn sessions, if any checkedIn present without checkOut then that is the latest checkIn status and time
    } 
}

/**
 * logOut API interfaces
 */

export interface ILogOutFailed extends IDefaultFailedAPi {}

export interface ILogOutSuccess {
    status: true
}
