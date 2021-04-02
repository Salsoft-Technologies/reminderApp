import * as React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import GetStartedScreen from '../screens/GetStartedScreen/index';
import LoginScreen from '../screens/LoginScreen/index';

function MyStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="GetStartedScreen"
        component={GetStartedScreen}
      />

    </Stack.Navigator>
  );
}

export default MyStack;
