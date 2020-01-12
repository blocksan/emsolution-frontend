export interface IAuthenticateReducer {
    authenticated: boolean;
}

export interface IAuthenticateAction {
    type: string | number;
    payload?: any;
}