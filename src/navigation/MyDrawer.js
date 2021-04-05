import React from 'react';
import 'react-native-gesture-handler';
import {Text, View} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen/index';

function MyDrawer({navigation}){
    const Drawer = createDrawerNavigator();
    return(
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      </Drawer.Navigator>
    )
}

export default MyDrawer