import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { CheckInAttendanceScreenContainer } from '../../screens/attendance/checkIn/CheckInAttendanceScreen';
import { __ScreenNames } from "../../constants/screenNames";
import { RenderIcon } from "../../components/renderIconDynamically";

/**
 * destructure screen names
 */
const {CHECKIN_SCREEN} = __ScreenNames;


const CheckInStackNavigator = createStackNavigator({
        [CHECKIN_SCREEN] : {
            screen: CheckInAttendanceScreenContainer
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

export {CheckInStackNavigator}