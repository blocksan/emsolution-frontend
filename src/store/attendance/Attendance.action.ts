import * as actions from '../../utils/actions';
import { axiosInstance } from '../../utils/axios';

import {failedState, loadingState, successState} from './../../interfaces/IApiResponse'
import { __defaultError } from '../../constants/defaultError';
import { ICheckInSuccess, ICheckInFailed, ICheckOutFailed } from '../../interfaces/stores/actions/IAttendance.action';
import { __checkin } from '../../fixtures/__checkin';

const { CHECK_IN, CHECK_OUT } = actions;

/**
 * Action to checkin the user
 */
export const checkInAction = (latitude: number, longitude: number) => {
    return async dispatch => {
        dispatch({ payload: { ...loadingState }, type: CHECK_IN });
        try {
            const body = {
                currentLat:latitude,
                currentLong: longitude
            }
            //TODO: const response = await axiosInstance.post(`/api/attendance/checkIn`, body);
            const response = __checkin.checkinFixture;
            if (response.data.status) {
                const result = response.data as ICheckInSuccess;
                return dispatch({
                    payload: { 
                        ...successState,
                        data:{
                            lastCheckedIn: result.data.lastCheckedIn
                        }
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
export const checkOutAction = () => {
    return async dispatch => {
        dispatch({ payload: { ...loadingState }, type: CHECK_OUT });
        try {
            const response = await axiosInstance.post(`/api/attendance/checkOut`);
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


