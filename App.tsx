import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import middleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './src/store/rootReducer';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { AppContainer } from './src/navigators';

const RStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(middleware)));

export default function App() {
  return (
    <Provider store={RStore}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <AppContainer></AppContainer>
      </ApplicationProvider>
    </Provider>
  );
}
