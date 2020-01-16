import { createSwitchNavigator } from 'react-navigation';
import { LoginScreenContainer } from '../../screens/authentication/login/LoginScreen';
import { RegisterScreen } from '../../screens/authentication/register/RegisterScreen';
import { __ScreenNames } from '../../constants/screenNames';
import { dashboardDrawerNavigator } from '../drawerNavigators/dashboardDrawerNavigator';
import { CheckInAttendanceScreenContainer } from '../../screens/attendance/checkIn/CheckInAttendanceScreen';

const {REGISTER_SCREEN, LOGIN_SCREEN, DASHBOARD_SCREEN} = __ScreenNames;

const AppSwitchNavigator = createSwitchNavigator({
    [DASHBOARD_SCREEN]:{
        screen: dashboardDrawerNavigator
    },
    [LOGIN_SCREEN]:{
        screen: LoginScreenContainer
    },
    [REGISTER_SCREEN]:{
        screen: RegisterScreen
    },
})


export { AppSwitchNavigator }