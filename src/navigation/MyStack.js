import * as React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import StartScreen from '../screens/StartScreen/index';
import HomeScreen from '../screens/HomeScreen/index';
import NotificationScreen from '../screens/NotificationScreen/index';
import HeaderComponent from '../components/HeaderComponent/index';

import MyTab from '../navigation/MyTab';

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
        name="MyTab"
        component={MyTab}
      />

      {/* <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      /> */}

      <Stack.Screen
        options={{headerShown: false}}
        name="NotificationScreen"
        component={NotificationScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="HeaderComponent"
        component={HeaderComponent}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
