import React from 'react';
import {ICheckInAttendanceProp} from './../../../interfaces/attendance/ICheckInAttendance';
import { styles } from './CheckInAttendanceStyle';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';


const CheckInAttendanceScreen = (props: ICheckInAttendanceProp) => {

    /**
     * destructue the styles markup
     */
    const { container } = styles;
    return (
        <View style={container}> 
            <Text category='h5'>CheckInAttendanceScreen</Text>
        </View>
    )
}

export { CheckInAttendanceScreen }