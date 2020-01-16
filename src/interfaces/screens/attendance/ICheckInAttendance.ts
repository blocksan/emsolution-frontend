import { IAttendanceReducer } from "../../stores/reducers/IAttendance.reducer";

export interface ICheckInAttendanceProp extends IAttendanceReducer{
    checkInDispatcher: (latitude: number, longitude: number) => void;
    checkOutDispatcher: () => void
}