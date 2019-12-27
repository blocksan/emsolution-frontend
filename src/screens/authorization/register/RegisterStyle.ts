import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginCard:{
        elevation: 1,
        justifyContent: 'center',
        flex: 0,
        width:'80%',
        minHeight:300,
        maxHeight:400,
        borderRadius:10
    },
    marginInput:{
        marginBottom:20
    }
});

export {styles}