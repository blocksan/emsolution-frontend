export interface IAttendanceReducer {
    lastCheckedIn?: Date;
}

export interface IAttendanceAction {
    type: string | number;
    payload?: any;
}