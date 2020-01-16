import { IAttendanceReducer, IAttendanceAction } from '../../interfaces/stores/reducers/IAttendance.reducer';
import * as actions from '../../utils/actions';

const initialState: IAttendanceReducer = {
    checkinLoading: false,
    checkoutLoading: false,
    checkinError:  undefined,
    checkoutError: undefined,
    checkoutSuccess: false,
    checkinSuccess: false
};

const {CHECK_IN, CHECK_OUT} = actions;

const AttendanceReducer = (state = initialState, action: IAttendanceAction) => {
    switch (action.type) {
        case CHECK_IN:
            if (action.payload.loading) {
                return { ...state, checkinLoading: action.payload.loading };
            }
            if (action.payload.status) {
                const {lastCheckedIn} = action.payload.data;
                return {
                    ...state,
                    checkinSuccess: action.payload.status,
                    checkinLoading: action.payload.loading,
                    lastCheckedIn
                };
            }
            return {
                ...state,
                checkinSuccess: action.payload.status,
                checkinError: action.payload.errors,
                checkinLoading: action.payload.loading,
            };

        case CHECK_OUT:
            if (action.payload.loading) {
                return { ...state, checkoutLoading: action.payload.loading };
            }
            if (action.payload.status) {
                return {
                    ...state,
                    checkoutSuccess: action.payload.status,
                    checkoutLoading: action.payload.loading
                };
            }
            return { ...state, 
                checkoutSuccess: action.payload.status,
                checkoutError: action.payload.errors, 
                checkoutLoading: action.payload.loading };
        default:
            return state;
    }
};

export {AttendanceReducer};
