import { NavigationStackProp } from 'react-navigation-stack';
export interface ILoginProp{
    navigation : NavigationStackProp<{}>
    authenticated: boolean,
    loginLoading: boolean,
    loginError: string,
    loginDispatcher: (email: string, password: string) =>  void
} 