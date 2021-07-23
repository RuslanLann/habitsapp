if (__DEV__) {
  import('./reactotronConfig').then(() => console.log('Reactotron Configured'));
  // NativeModules.DevMenu.show();
}

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

console.logObject = (...args) => {
  console.log(JSON.stringify(args[0], null, 4), ...args);
};

AppRegistry.registerComponent(appName, () => App);
