import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { LoginScreen } from '../screens/authorization/login/LoginScreen';
import { CheckInAttendanceScreen } from '../screens/attendance/checkIn/CheckInAttendanceScreen';
import { RegisterScreen } from '../screens/authorization/register/RegisterScreen';
import { __ScreenNames } from '../constants/screenNames';

const {REGISTER_SCREEN, LOGIN_SCREEN, DASHBOARD_SCREEN} = __ScreenNames;

const AppSwitchNavigator = createSwitchNavigator({
    [LOGIN_SCREEN]:{
        screen: LoginScreen
    },
    [REGISTER_SCREEN]:{
        screen: RegisterScreen
    },
    [DASHBOARD_SCREEN]:{
        screen: CheckInAttendanceScreen
    }
})

const AppContainer = createAppContainer(AppSwitchNavigator)

export { AppContainer }