import * as React from 'react';
import 'react-native-gesture-handler';
import TabBar from '../components/TabBar/index';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen/index';
import ProfileScreen from '../screens/ProfileScreen/index';

const Tab = createBottomTabNavigator();

export default function MyTab() {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Task" component={ProfileScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
