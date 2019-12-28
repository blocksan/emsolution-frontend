import React from 'react';
import { Layout,Button, Text, Input, Icon, Card, Spinner } from '@ui-kitten/components';
import { styles } from './RegisterStyle';
import { View, GestureResponderEvent } from 'react-native';
import { IRegisterProp } from '../../../interfaces/authorization/IRegister';
import { __ScreenNames } from '../../../constants/screenNames';
import { ButtonStyle } from '../../../utils/styles/ButtonStyle';

const RegisterScreen = (props: IRegisterProp) => {

    /**
     * react useState hook to set the value for register in
     */
    const [registeringIn, setRegisterState] = React.useState(false);

    const registerHandler = (event: GestureResponderEvent) => {
        setRegisterState(!registeringIn)
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
     * redirect to login screen
     */
    const redirectToLogin = () =>{
        const {navigation} = props;
        const { LOGIN_SCREEN } = __ScreenNames;
        navigation.navigate(LOGIN_SCREEN)
    }

    /**
     * destructure the styles 
     */
    const {container, loginCard, marginInput} = styles;

    return (
            <Layout style={container}>
                <Card style={[ loginCard]}>
                    <Text style={{textAlign:"center",marginTop:-10, marginBottom:20}}category='h5'>Register</Text>
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
                    <Input
                        value={password}
                        placeholder='confirm password'
                        icon={renderIcon}
                        secureTextEntry={secureTextEntry}
                        onIconPress={onIconPress}
                        onChangeText={setPassword}
                        style={marginInput}
                    />
                    <View style={{alignItems:"center"}}>
                        {registeringIn && <Spinner style={{position:"absolute",top:0}} />}
                        {!registeringIn && <Button style={[ButtonStyle.common]} status='primary' onPress={registerHandler}> Register</Button>}
                    </View>
                    <View style={{marginTop:10}}>
                        <Button appearance='ghost' style={[ButtonStyle.common]} status='primary' onPress={redirectToLogin}>Login</Button>
                    </View>
                </Card>
            </Layout>
    )
}

export { RegisterScreen }