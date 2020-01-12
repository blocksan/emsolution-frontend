import { IAttendanceReducer, IAttendanceAction } from '../../interfaces/stores/reducers/IAttendance.reducer';
import * as actions from '../../utils/actions';

const initialState: IAttendanceReducer = {
};

const {CHECK_IN, CHECK_OUT} = actions;

const AttendanceReducer = (state = initialState, action: IAttendanceAction) => {
    switch (action.type) {
        case CHECK_IN:
            if (action.payload.loading) {
                return { ...state, checkinLoading: action.payload.loading };
            }
            if (action.payload.status) {
                const {isCheckedInRecently} = action.payload.data;
                return {
                    ...state,
                    checkinLoading: action.payload.loading,
                    isCheckedInRecently
                };
            }
            return {
                ...state,
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
                    checkoutLoading: action.payload.loading
                };
            }
            return { ...state, 
                checkoutError: action.payload.errors, 
                checkoutLoading: action.payload.loading };
        default:
            return state;
    }
};

export {AttendanceReducer};
