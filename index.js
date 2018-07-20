/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigation} from 'react-navigation';
import App from './components/App';
import {name as appName} from './app.json';
import { createStackNavigator } from 'react-navigation'; 
import Login from './components/Login';

const Detail = "Detail";


const RootStack = createStackNavigator(
    {
      Login: {screen: Login },
      Detail: {screen: App },
    },
    {
      initialRouteName: 'Login',
    }
  );
  
  export default class Apple extends React.Component {
    render() {
      return <RootStack />;
    }
  }


AppRegistry.registerComponent(appName, () => Apple);
