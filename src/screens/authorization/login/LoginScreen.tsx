import React from 'react';
import {ILoginProp} from './../../../interfaces/authorization/ILogin';
import { Layout,Button, Text, Input, Icon, Card, Spinner } from '@ui-kitten/components';
import { styles } from './LoginStyle';
import { View, GestureResponderEvent } from 'react-native';
import { __ScreenNames } from '../../../constants/screenNames';
import { ButtonStyle } from '../../../utils/styles/ButtonStyle';

const LoginScreen = (props: ILoginProp) => {

    /**
     * all the destructure for the screen
     */
    const { navigation } = props;
    /**
     * destructure the screen names
     */
    const { REGISTER_SCREEN, DASHBOARD_SCREEN } = __ScreenNames;
    /**
     * destructure the styles 
     */
    const {container, loginCard, marginInput} = styles;

    /**
     * react useState hook to set the value for login
     */
    const [loginIn, setLogin] = React.useState(false);

    const loginHandler = (event: GestureResponderEvent) => {
        setLogin(!loginIn);
        navigation.navigate(DASHBOARD_SCREEN)
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
                    <Text style={{textAlign:"center",marginTop:-10, marginBottom:20}}category='h5'>Login</Text>
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
                        {loginIn && <Spinner style={{position:"absolute",top:0}} />}
                        {!loginIn && <Button style={[ButtonStyle.common]} status='primary' onPress={loginHandler}> Login</Button>}
                    </View>
                    <View style={{marginTop:10}}>
                        <Button appearance='ghost' status='primary' style={[ButtonStyle.common]} onPress={redirectToRegister}>Register</Button>
                    </View>
                </Card>
            </Layout>
    )
}

export { LoginScreen }