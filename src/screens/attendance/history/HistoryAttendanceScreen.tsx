import React from 'react';
import { IHistoryAttendanceProp } from '../../../interfaces/screens/attendance/IHistoryAttendance';
import { styles } from './HistoryAttendanceStyle';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';


const HistoryAttendanceScreen = (props: IHistoryAttendanceProp) => {

    /**
     * destructue the styles markup
     */
    const { container } = styles;
    return (
        <View style={container}> 
            <Text category='h5'>HistoryAttendanceScreen</Text>
        </View>
    )
}

export { HistoryAttendanceScreen }