/**
 * @format
 */

import { AppRegistry } from 'react-native';
// Render Pertama Kali
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);