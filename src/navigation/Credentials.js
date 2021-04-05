import * as React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import GetStartedScreen from '../screens/GetStartedScreen/index';
import LoginScreen from '../screens/LoginScreen/index';
import SignUpScreen from '../screens/SignupScreen/index';
import MyStack from '../navigation/MyStack';

function Credentials() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
    <Stack.Screen
        options={{headerShown: false}}
        name="GetStartedScreen"
        component={GetStartedScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUpScreen"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
}

export default Credentials;
