import React from 'react';
import { LoginScreen } from './src/screens/authorization/login/LoginScreen';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { AppContainer } from './src/navigators/switchNavigators';

export default function App() {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <AppContainer></AppContainer>
      </ApplicationProvider>
    </React.Fragment>
  );
}
