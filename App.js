import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import MyStack from './src/navigation/MyStack';

function App() {
  return (
    <NavigationContainer>
    <MyStack/>
    </NavigationContainer>
  );
};


export default App;
