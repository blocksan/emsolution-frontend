import React from 'react';
import { connect } from 'react-redux';
import {ICheckInAttendanceProp} from '../../../interfaces/screens/attendance/ICheckInAttendance';
import { styles } from './CheckInAttendanceStyle';
import { View, GestureResponderEvent } from 'react-native';
import { Layout,Button, Text, Input, Icon, Card, Spinner } from '@ui-kitten/components';
import { ButtonStyle } from '../../../utils/styles/ButtonStyle';
import { getCurrentLocation } from '../../../utils/location/locationUtil';
import { checkInAction, checkOutAction } from '../../../store/rootAction';
import { RenderIcon } from '../../../components/renderIconDynamically';

const CheckInAttendanceScreen = (props: ICheckInAttendanceProp) => {

    const { checkInDispatcher, checkOutDispatcher, lastCheckedIn, checkinLoading, checkinError, checkoutLoading, checkoutError, checkinSuccess, checkoutSuccess } = props;
    /**
     * destructue the styles markup
     */
    const { container, layout, bottomLayout } = styles;

    //checkIn Handler
    const checkInHandler = async (event: GestureResponderEvent) => {
        // const locationResult = await getCurrentLocation();
        const locationResult ={
            status: true,
            location: {
                coords:{
                    latitude: 20.4000,
                    longitude: 40.2000
                }
            }
        }
        if(!locationResult.status){

        }else{
            const {coords:{latitude, longitude}} = locationResult.location
            
            /**
             * call the checkin dispatcher
             */
            checkInDispatcher(latitude, longitude);
        }
    }

    //checkoutHandler Handler
    const checkoutHandler = (event: GestureResponderEvent) => {
            checkOutDispatcher();
    }
    
    const renderLoadingIcon = (style) => {
        return <RenderIcon {...style} name="star" style={{}} onPress={()=>{}}></RenderIcon>
    }

    return (
        <Layout style={container}>
            <Layout style={[layout]}>
                {!checkinError && !checkinSuccess && !lastCheckedIn &&  <Text category="h5" status='basic'> You are not yet checked in. </Text>}
                {checkinSuccess && <Text category="h5"> Last checked in {lastCheckedIn.toDateString()}</Text>}
                {!checkinSuccess && checkinError && <Text category="h5" status='danger'> {checkinError} </Text> }
            </Layout>
            <Layout style={[layout, bottomLayout]}>
                {lastCheckedIn && <Button style={[ButtonStyle.common,{flexDirection: 'row-reverse' }]} status='basic' onPress={checkoutHandler}> Check Out</Button>}
                {!lastCheckedIn && <Button style={[ButtonStyle.common]} status='primary' onPress={checkInHandler}> Check In</Button>}
            </Layout>
        </Layout>
    )
}

const stateToProps = state => {
    return {
        checkinError: state.attendance.checkinError,
        checkinLoading: state.attendance.checkinLoading,
        lastCheckedIn: state.attendance.lastCheckedIn,
        checkoutError: state.attendance.checkoutError,
        checkoutLoading: state.attendance.checkoutLoading,
        checkoutSuccess: state.attendance.checkoutSuccess,
        checkinSuccess: state.attendance.checkinSuccess
    };
};

const dispatchers = dispatch => {
    return {
        checkInDispatcher: (latitude, longitude) => dispatch(checkInAction(latitude, longitude)),
        checkOutDispatcher: () => dispatch(checkOutAction()),
    };
};

const CheckInAttendanceScreenContainer = connect(stateToProps, dispatchers)(CheckInAttendanceScreen);

export { CheckInAttendanceScreenContainer }