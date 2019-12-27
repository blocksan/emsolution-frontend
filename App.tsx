import React from 'react';
import { LoginScreen } from './src/screens/authorization/login/LoginScreen';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { View } from 'react-native';
import { RegisterScreen } from './src/screens/authorization/register/RegisterScreen';

export default function App() {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <LoginScreen></LoginScreen>
        <RegisterScreen></RegisterScreen>
      </ApplicationProvider>
    </React.Fragment>
  );
}
