import React from 'react';
import { connect } from 'react-redux';
import {ILoginProp} from '../../../interfaces/screens/authentication/ILogin';
import { Layout,Button, Text, Input, Icon, Card, Spinner } from '@ui-kitten/components';
import { styles } from './LoginStyle';
import { View, GestureResponderEvent } from 'react-native';
import { __ScreenNames } from '../../../constants/screenNames';
import { ButtonStyle } from '../../../utils/styles/ButtonStyle';
import { loginAction } from './../../../store/rootAction';

const LoginScreen = (props: ILoginProp) => {

    /**
     * all the destructure for the screen
     */
    const { navigation, authenticated, loginLoading, loginDispatcher } = props;

    
    /**
     * destructure the screen names
     */
    const { REGISTER_SCREEN, DASHBOARD_SCREEN } = __ScreenNames;

    /**
     * check if user is authenticated, then take him to dashboard
     */

    if(authenticated){
        navigation.navigate(DASHBOARD_SCREEN)
    }

    /**
     * destructure the styles 
     */
    const {container, loginCard, marginInput} = styles;

    /**
     * react useState hook to set the value for login
     */
    // const [loginIn, setLogin] = React.useState(false);

    const loginHandler = (event: GestureResponderEvent) => {
        // setLogin(!loginIn);
        loginDispatcher(username, password);
    }

    /**
     * react useState hook to set the value for username
     */
    const [username, setUserName] = React.useState('');

    /**
     * react userState hook to set the value for password
     */
    const [password, setPassword] = React.useState('');

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const onIconPress = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    /**
     * render icon for the password input
     */
    const renderIcon = (style) => (
        <Icon {...style} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    );

    /**
     * redirect to register screen
     */

    const redirectToRegister = () => {
        navigation.navigate(REGISTER_SCREEN)
    }

    return (
            <Layout style={container}>
                <Card style={[ loginCard]}>
                    <Text style={{textAlign:"center",marginTop:-10, marginBottom:20}}category='h5'>Login </Text>
                    <Input
                        placeholder='username'
                        value={username}
                        onChangeText={setUserName}
                        style={marginInput}
                    />
                    <Input
                        value={password}
                        placeholder='********'
                        icon={renderIcon}
                        secureTextEntry={secureTextEntry}
                        onIconPress={onIconPress}
                        onChangeText={setPassword}
                        style={marginInput}
                    />
                    <View style={{alignItems:"center"}}>
                        {loginLoading && <Spinner style={{position:"absolute",top:0}} />}
                        {!loginLoading && <Button style={[ButtonStyle.common]} status='primary' onPress={loginHandler}> Login</Button>}
                    </View>
                    <View style={{marginTop:10}}>
                        <Button appearance='ghost' status='primary' style={[ButtonStyle.common]} onPress={redirectToRegister}>Register</Button>
                    </View>
                </Card>
            </Layout>
    )
}

const stateToProps = state => {
    return {
        authenticated: state.auth.authenticated,
        loginLoading: state.auth.loginLoading,
        loginError: state.auth.loginError
    };
};

const dispatchers = dispatch => {
    return {
        loginDispatcher: (email, password) => dispatch(loginAction(email, password)),
    };
};

const LoginScreenContainer = connect(stateToProps, dispatchers)(LoginScreen);

export { LoginScreenContainer }