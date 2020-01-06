import { createSwitchNavigator } from 'react-navigation';
import { LoginScreen } from '../../screens/authorization/login/LoginScreen';
import { RegisterScreen } from '../../screens/authorization/register/RegisterScreen';
import { __ScreenNames } from '../../constants/screenNames';
import { dashboardDrawerNavigator } from '../drawerNavigators/dashboardDrawerNavigator';

const {REGISTER_SCREEN, LOGIN_SCREEN, DASHBOARD_SCREEN} = __ScreenNames;

const AppSwitchNavigator = createSwitchNavigator({
    [LOGIN_SCREEN]:{
        screen: LoginScreen
    },
    [REGISTER_SCREEN]:{
        screen: RegisterScreen
    },
    [DASHBOARD_SCREEN]:{
        screen: dashboardDrawerNavigator
    }
})


export { AppSwitchNavigator }