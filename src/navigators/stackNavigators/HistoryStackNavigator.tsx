import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { HistoryAttendanceScreen } from '../../screens/attendance/history/HistoryAttendanceScreen';
import { __ScreenNames } from "../../constants/screenNames";
import { RenderIcon } from "../../components/renderIconDynamically";

/**
 * destructure screen names
 */
const {ATTENDANCE_HISTORY} = __ScreenNames;


const HistoryStackNavigator = createStackNavigator({
        [ATTENDANCE_HISTORY] : {
            screen: HistoryAttendanceScreen
        }
    }
    ,{
        defaultNavigationOptions:({navigation}) => {
            return {
                headerTitle: navigation.state.routeName,
                headerLeft:(
                    <RenderIcon name="menu-outline" style={{paddingLeft:40}} onPress={() => navigation.openDrawer()}></RenderIcon>
                )
            }
        }
    }
)

export {HistoryStackNavigator}