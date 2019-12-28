import React from 'react';
import {ITempProp} from '../src/interfaces/Itemp';
import { styles } from './temp';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';


const TempScreen = (props: ITempProp) => {

    /**
     * destructue the styles markup
     */
    const { container } = styles;
    return (
        <View style={container}>  
            <Text>TempScreen</Text>
        </View>
    )
}

export { TempScreen }