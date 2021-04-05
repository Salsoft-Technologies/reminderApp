import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import Credentials from './src/navigation/Credentials';
import MyStack from './src/navigation/MyStack';
import MyTab from './src/navigation/MyTab';

function App() {
  return (
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
  );
};


export default App;
