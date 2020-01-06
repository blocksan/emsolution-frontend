import { createDrawerNavigator } from 'react-navigation-drawer';
import { __ScreenNames } from '../../constants/screenNames';
import {stackNavigators} from './../stackNavigators'

/**
 * destructure screen names
 */
const { CHECKIN_SCREEN, ATTENDANCE_HISTORY } = __ScreenNames;

const dashboardDrawerNavigator = createDrawerNavigator({
    [CHECKIN_SCREEN] : {
        screen : stackNavigators.CheckInStackNavigator
    },
    [ATTENDANCE_HISTORY] : {
        screen : stackNavigators.HistoryStackNavigator
    }
})

export { dashboardDrawerNavigator }