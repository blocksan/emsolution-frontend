export interface IAttendanceReducer {
    lastCheckedIn?: Date;
    checkinLoading: boolean;
    checkoutLoading: boolean;
    checkinError: string | undefined;
    checkoutError: string | undefined;
    checkinSuccess: boolean;
    checkoutSuccess: boolean
}

export interface IAttendanceAction {
    type: string | number;
    payload?: any;
}