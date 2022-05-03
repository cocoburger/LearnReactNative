/**
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//App 컴포넌트를 불러와서  AppRegistry.registerComponent 함수를 사용해 네이티브 시스템에 해당 컴포넌트를 등록한다.
//이 작업을 꼭 해줘야 네이티브 시스템에서 리액트 네이티브 컴포넌트를 화면에 보여줄 수 있다.

AppRegistry.registerComponent(appName, () => App);
