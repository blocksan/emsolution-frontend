import * as actions from '../../utils/actions';
import { axiosInstance } from '../../utils/axios';
import { ZERO } from '../../constants/numbers';

import {failedState, loadingState, successState} from '../../interfaces/IApiResponse'
import { __defaultError } from '../../constants/defaultError';
import { ILogInSuccess, ILogInFailed, ILogOutFailed } from '../../interfaces/stores/actions/IAuthentication.action';
import { __login } from '../../fixtures/__login';

const defaultError = [{ message: __defaultError }];

const { LOGIN, LOGOUT } = actions;

/**
 * Action to login the user
 */

export const loginAction = (email: string, password: string | number) => {
    return async dispatch => {
        dispatch({ payload: { ...loadingState }, type: LOGIN });
        try {
            const query = {
                email,
                password
            };
            // const response = await axiosInstance.post('/api/auth/login', query);
            const response = __login.loginSuccessFixture;
            // const result = validListContents;
            if (response.data.status) {
                const result = response.data as ILogInSuccess;
                return dispatch({
                    payload: {
                        ...successState,
                        data: {
                            authenticated: true,
                            isCheckedInRecently: result.data.isCheckedInRecently
                        },
                    },
                    type: LOGIN,
                });
            }else{
                const result = response.data as ILogInFailed;
                const message = result.data.error;
                return dispatch({ payload: { ...failedState, authenticated: false, errors: message }, type: LOGIN });
            }
        } catch (err) {
            let error = defaultError[ZERO];
            if (err.response) {
                const { data } = err.response;
                error = { message: data.message.message };
            } else if (err.request) {
                error = { message: 'Network Unreachable' };
            }
            return dispatch({ payload: { ...failedState, authenticated: false, errors: error.message }, type: LOGIN });
        }
    };
};

/**
 * Action to logout the user
 */
export const logoutAction = () => {
    return async dispatch => {
        dispatch({ payload: { ...loadingState }, type: LOGOUT });
        try {
            const response = await axiosInstance.post('/api/auth/logout');
            if (response.data.status === 'success') {
                const authenticated = false;
                return dispatch({
                    payload: {
                        ...successState,
                        data: { authenticated },
                    },
                    type: LOGOUT,
                });
            }
            const result  = response.data as ILogOutFailed
            const message = result.data.error;
            return dispatch({ payload: { ...failedState, errors: message }, type: LOGOUT });
        } catch (err) {
            let error = defaultError[ZERO];
            if (err.response) {
                const { data } = err.response;
                error = { message: data.message };
            } else if (err.request) {
                error = { message: 'Network Unreachable' };
            }
            return dispatch({ payload: { ...failedState, errors: error.message }, type: LOGOUT });
        }
    };
};
