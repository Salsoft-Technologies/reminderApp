import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/navigation/MyStack';
import MyDrawer from './src/navigation/MyDrawer';
import Credentials from './src/navigation/Credentials';


function App() {
  return (
    <NavigationContainer>
    <MyDrawer />
    </NavigationContainer>
  );
};


export default App;
