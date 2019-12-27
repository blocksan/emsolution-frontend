import React from 'react';
import {ILoginProp} from './../../../interfaces/authorization/ILogin';
import { Layout,Button, Text, Input, Icon, Card, Spinner } from '@ui-kitten/components';
import { styles } from './LoginStyle';
import { View, GestureResponderEvent } from 'react-native';

const LoginScreen = (props: ILoginProp) => {

    /**
     * react useState hook to set the value for login
     */
    const [loginIn, setLogin] = React.useState(false);

    const loginHandler = (event: GestureResponderEvent) => {
        setLogin(!loginIn)
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

    const StarIcon = (style) => (
        <Icon {...style} name='star'/>
    );

    /**
     * destructure the styles 
     */
    const {container, loginCard, marginInput} = styles;

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
                        {!loginIn && <Button style={{borderRadius:50, width:'100%'}} status='primary' onPress={loginHandler}> Login</Button>}
                    </View>
                    <View style={{marginTop:10}}>
                        <Button appearance='ghost' status='primary'>Register</Button>
                    </View>
                </Card>
            </Layout>
    )
}

export { LoginScreen }