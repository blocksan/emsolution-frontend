import { IDefaultFailedAPi } from "../../common/IDefaultApi";

export interface ICheckInFailed extends IDefaultFailedAPi {}

export interface ICheckInSuccess {
    status: true,
    data:{
        lastCheckedIn: Date
    } 
}

/**
 * interfaces for checkOutSuccess
 */

export interface iCheckOutSuccess{
    status: true
}


/**
 * interfaces for checkOutFailed
 */
export interface ICheckOutFailed extends IDefaultFailedAPi {}
