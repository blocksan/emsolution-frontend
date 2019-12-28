import {StyleSheet} from 'react-native';
import { __Colors } from '../../../constants/colorCodes';

const { PRIMARY_CONTAINER } = __Colors;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: PRIMARY_CONTAINER,
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export {styles}