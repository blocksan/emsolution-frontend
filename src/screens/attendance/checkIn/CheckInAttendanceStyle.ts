import {StyleSheet} from 'react-native';
import { __Colors } from '../../../constants/colorCodes';

const { PRIMARY_CONTAINER } = __Colors;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: PRIMARY_CONTAINER,
      alignItems: 'center',
      justifyContent: 'center',
    },
    layout:{
      flex: 1,
      flexGrow: 9,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomLayout:{
      width:'60%',
      flexGrow: 1,
    }
});

export {styles}