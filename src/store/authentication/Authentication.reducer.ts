import { IAuthenticateReducer, IAuthenticateAction } from '../../interfaces/stores/reducers/IAuthentication.reducer';
import * as actions from '../../utils/actions';

const initialState: IAuthenticateReducer = {
    authenticated: false
};

const {LOGIN, LOGOUT, AUTHENTICATE} = actions;

const AuthenticateReducer = (state = initialState, action: IAuthenticateAction) => {
    switch (action.type) {
        case LOGIN:
            if (action.payload.loading) {
                return { ...state, loginLoading: action.payload.loading };
            }
            if (action.payload.status) {
                const {isCheckedInRecently} = action.payload.data;
                return {
                    ...state,
                    loginLoading: action.payload.loading,
                    isCheckedInRecently
                };
            }
            return {
                ...state,
                loginError: action.payload.errors,
                loginLoading: action.payload.loading,
            };

        case LOGOUT:
            if (action.payload.loading) {
                return { ...state, logoutLoading: action.payload.loading };
            }
            if (action.payload.status) {
                return {
                    ...state,
                    logoutLoading: action.payload.loading,
                    authenticated: action.payload.data.authenticated,
                };
            }
            return { ...state, 
                logoutError: action.payload.errors, 
                logoutLoading: action.payload.loading };
        // case actions.FORGOT_PASSWORD:
        //     if (action.payload.loading) {
        //         return { ...state, forgotPasswordLoading: action.payload.loading };
        //     }
        //     if (action.payload.status) {
        //         return {
        //             ...state,
        //             emailScreen: action.payload.data.emailScreen,
        //             forgotPasswordLoading: action.payload.loading,
        //         };
        //     }
        //     return {
        //         ...state,
        //         emailScreen: false,
        //         error: action.payload.errors,
        //         forgotPasswordLoading: action.payload.loading,
        //     };
        case AUTHENTICATE:
            return { ...state, authenticated: state.authenticated };
        default:
            return state;
    }
};

export {AuthenticateReducer};
