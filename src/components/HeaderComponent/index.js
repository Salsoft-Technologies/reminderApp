import React, {useState, useEffect, useContext} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../navigation/AuthProvider';
import * as firebaseobj from 'firebase';
import {db} from '../../../config';
if (!firebaseobj.apps.length) {
  firebaseobj.initializeApp(db);
}

import 'react-native-gesture-handler';

import styles from './styles';

function HeaderComponent() {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);
  const [profileData, setProfileData] = useState([]);
  const retrievedUser = user.uid;

  const gettingData = () => {
    const ProfileDetails = firebaseobj.database().ref('ProfileDetails');
    ProfileDetails.on('value', (datasnap) => {
      if (datasnap.val()) {
        const newDetails = datasnap.val();
        const yesDetails = Object.values(newDetails);
        const newArray = yesDetails.filter(
          (obj) => obj.userId === retrievedUser,
        );
        setProfileData(newArray);
      }
    });
  };

  useEffect(() => {
    gettingData();
  }, []);

  const renderHeaderContent = () => {
    return (
      <>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            resizeMode="contain"
            style={styles.menuIcon}
            source={require('../../assets/images/menu.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}>
          <Image
            resizeMode="contain"
            style={styles.notificationIcon}
            source={require('../../assets/images/notification.png')}
          />
        </TouchableOpacity>
      </>
    );
  };

  const renderAlternateContent = () => {
    return (
      <>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            resizeMode="contain"
            style={styles.menuIcon}
            source={require('../../assets/images/menu.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AddProfile')}>
          <Image
            resizeMode="contain"
            style={styles.profileIcon}
            source={require('../../assets/images/user.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}>
          <Image
            resizeMode="contain"
            style={styles.notificationIcon}
            source={require('../../assets/images/notification.png')}
          />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.mainHeaderView}>
      {profileData != '' ? (
        renderHeaderContent()
      ) : (
        <>{renderAlternateContent()}</>
      )}
    </View>
  );
}

export default HeaderComponent;
