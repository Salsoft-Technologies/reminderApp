import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyStack from '../navigation/MyStack';
import LottieView from 'lottie-react-native';
import vw from '../utils/units/vw';
import vh from '../utils/units/vh';
import {TouchableOpacity} from 'react-native-gesture-handler';

function MyDrawer({navigation}) {
  const CustomDrawerComponent = (props) => (
    <SafeAreaView style={styles.mainDrawerView}>
      <View style={styles.drawerView}>
        <LottieView
          style={styles.imageStyle}
          source={require('../assets/animation/myAvatar.json')}
          autoPlay
          loop
        />

        <View style={styles.nameContainer}>
          <Text style={styles.nameStyle}>Kevin Peterson</Text>
          <Text style={styles.nameLocationStyle}>LA, USA</Text>
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

              <View style={styles.drawerTextView}>
                <Text style={styles.drawerTextStyle}>Invite</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.drawerItemStyleView}>
              <View style={styles.drawerItemIconView}>
                <Image
                  resizeMode="contain"
                  style={styles.drawerIcon}
                  source={require('../assets/images/invite.png')}
                />
              </View>

              <View style={styles.drawerTextView}>
                <Text style={styles.drawerTextStyle}>Logout</Text>
              </View>
            </TouchableOpacity>
            {/* <DrawerItems {...props}/> */}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
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
    paddingTop: 5 * vh,
  },

  imageStyle: {
    height: 18 * vh,
    alignSelf: 'center',
  },

  nameContainer: {
    alignItems: 'center',
  },

  nameStyle: {
    color: 'white',
    fontSize: 2.5 * vh,
    fontWeight: 'bold',
  },

  nameLocationStyle: {
    color: 'lightgray',
    fontSize: 2 * vh,
  },

  drawerItemStyleView: {
    flexDirection: 'row',
    borderLeftWidth: 3,
    borderColor: '#7f2d44',
    paddingVertical: 2 * vh,
    marginBottom: 2 * vh
  },

  allDrawerItemsView: {
    paddingTop: 8 * vh,
  },

  drawerItemIconView: {
    paddingLeft: 2 * vh,
  },

  drawerIcon: {
    height: 3.5 * vh,
    width: 10 * vw,
  },

  drawerTextView: {
    justifyContent: 'center', paddingLeft: 1 * vh
  },

  drawerTextStyle: {
    color: 'white', fontSize: 2.5 * vh
  }
});

export default MyDrawer;
