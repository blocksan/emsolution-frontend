import { combineReducers } from 'redux';
import {AuthenticateReducer} from './authentication/Authentication.reducer';
import {AttendanceReducer} from './attendance/Attendance.reducer';

const RootReducer = combineReducers({
    auth: AuthenticateReducer,
    attendance: AttendanceReducer
});

export default RootReducer;