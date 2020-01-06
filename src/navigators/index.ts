import { createAppContainer } from 'react-navigation';
import { AppSwitchNavigator } from './switchNavigators/appSwitchNavigators';

const AppContainer = createAppContainer(AppSwitchNavigator)

export { AppContainer }