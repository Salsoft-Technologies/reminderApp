import * as React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen/index';
import NotificationScreen from '../screens/NotificationScreen/index';
import AddProfile from '../screens/AddProfile/index';
import MyTab from './MyTab';

function MyStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="StartScreen"
        component={StartScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AddProfile"
        component={AddProfile}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="MyTab"
        component={MyTab}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="NotificationScreen"
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
