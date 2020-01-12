import * as actions from '../../utils/actions';
import { axiosInstance } from '../../utils/axios';

import {failedState, loadingState, successState} from './../../interfaces/IApiResponse'
import { __defaultError } from '../../constants/defaultError';
import { ICheckInSuccess, ICheckInFailed, ICheckOutFailed } from '../../interfaces/stores/actions/IAttendance.action';

const { CHECK_IN, CHECK_OUT } = actions;

/**
 * Action to checkin the user
 */
export const checkInAction = () => {
    return async dispatch => {
        dispatch({ payload: { ...loadingState }, type: CHECK_IN });
        try {

            const currentLat = ""; //get the current lat, long from the location api
            const currentLong = "";
            const body = {
                currentLat,
                currentLong
            }
            
            const response = await axiosInstance.post(`/api/attendance/checkIn`, body);
            if (response.data.status === 'success') {
                const result = response.data as ICheckInSuccess;
                return dispatch({
                    payload: { 
                        ...successState,
                        lastCheckedIn: result.data.lastCheckedIn
                    },
                    type: CHECK_IN,
                });
            }
            const result = response.data as ICheckInFailed;
            return dispatch({ payload: { ...failedState, error: result.data.error }, type: CHECK_IN });
        } catch (err) {
            let errorMessage = 'Something went wrong while checkin.'
            return dispatch({
                payload: { ...failedState, error: errorMessage },
                type: CHECK_IN,
            });
        }
    };
};

/**
 * Action to checkout the user's attendance
 * @param userId : mongoose id of the user
 */
export const checkOutAction = (userId: string) => {
    return async dispatch => {
        dispatch({ payload: { ...loadingState }, type: CHECK_OUT });
        try {
            const body = {
                userId
            }
            const response = await axiosInstance.post(`/api/attendance/checkOut`, body);
            if (response.data.status === 'success') {
                return dispatch({
                    payload: { ...successState},
                    type: CHECK_OUT,
                });
            }
            let result = response.data as ICheckOutFailed
            return dispatch({ payload: { ...failedState, error: result.data.error }, type: CHECK_OUT });
        } catch (err) {
            let errorMessage = 'Something went wrong while checkout.';

            return dispatch({
                payload: { ...failedState, error: errorMessage },
                type: CHECK_OUT,
            });
        }
    };
};


