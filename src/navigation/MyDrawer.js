import React, {useContext} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Share,
} from 'react-native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyStack from '../navigation/MyStack';
import LottieView from 'lottie-react-native';
import vw from '../utils/units/vw';
import LinearGradient from 'react-native-linear-gradient';

import vh from '../utils/units/vh';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../navigation/AuthProvider';

function MyDrawer({navigation}) {
  const {logout, user} = useContext(AuthContext);

  const CustomDrawerComponent = (props) => (
    <LinearGradient colors={['#ffffff', '#ece9e6', '#ece9e6']}>
      <View style={styles.drawerView}>
        <LottieView
          style={styles.imageStyle}
          source={require('../assets/animation/myAvatar.json')}
          autoPlay
          loop
        />

        <View style={styles.nameContainer}>
          <Text style={styles.nameStyle}>{user.email}</Text>
          <Text style={styles.nameLocationStyle}>by Rappel</Text>
        </View>

        <View style={styles.allDrawerItemsView}>
          <ScrollView>
            <TouchableOpacity style={styles.drawerItemStyleView}>
              <View style={styles.drawerItemIconView}>
                <Image
                  resizeMode="contain"
                  style={styles.drawerIcon}
                  source={require('../assets/images/invite.png')}
                />
              </View>

              <TouchableOpacity
                onPress={() => logout()}
                style={styles.drawerTextView}>
                <Text style={styles.drawerTextStyle}>Logout</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            {/* <DrawerItems {...props}/> */}
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerComponent {...props} />}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={MyStack} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  mainDrawerView: {
    flex: 1,
    backgroundColor: '#050215',
  },

  drawerView: {
    paddingTop: 3 * vh,
  },

  imageStyle: {
    height: 18 * vh,
    alignSelf: 'center',
  },

  nameContainer: {
    alignItems: 'center',
  },

  nameStyle: {
    fontSize: 2 * vh,
    fontWeight: 'bold',
  },

  nameLocationStyle: {
    color: 'darkgray',
    fontSize: 1.8 * vh,
  },

  drawerItemStyleView: {
    flexDirection: 'row',
    borderLeftWidth: 3,
    borderColor: '#7f2d44',
    paddingVertical: 2 * vh,
    marginBottom: 2 * vh,
  },

  allDrawerItemsView: {
    paddingTop: 5 * vh,
  },

  drawerItemIconView: {
    paddingLeft: 2 * vh,
  },

  drawerIcon: {
    height: 2.5 * vh,
    width: 10 * vw,
  },

  drawerTextView: {
    justifyContent: 'center',
    paddingLeft: 1 * vh,
  },

  drawerTextStyle: {
    fontSize: 2.2 * vh,
  },
});

export default MyDrawer;
