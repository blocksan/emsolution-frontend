interface IBaseApiState {
    loading: boolean;
    status: boolean;
    payload?: any;
}

export const loadingState: IBaseApiState = {
    loading: true,
    status: false,
};
export const successState: IBaseApiState = {
    loading: false,
    status: true,
};
export const failedState: IBaseApiState = {
    loading: false,
    status: false,
};
 