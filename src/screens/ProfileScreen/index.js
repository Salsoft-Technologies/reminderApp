import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import UserAccessHeader from '../../components/UserAccessHeader/index';
import LottieView from 'lottie-react-native';
import styles from './styles';
import {AuthContext} from '../../navigation/AuthProvider';
import * as firebaseobj from 'firebase';
import {db} from '../../../config';
if (!firebaseobj.apps.length) {
  firebaseobj.initializeApp(db);
}

function ProfileScreen() {
  const {user} = useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileData, setProfileData] = useState([]);
  const username = user.email.split('@')[0];
  const updatedUserName = username.charAt(0).toUpperCase() + username.slice(1);
  const retrievedUser = user.uid;

  const gettingData = () => {
    const ProfileDetails = firebaseobj.database().ref('ProfileDetails');
    ProfileDetails.on('value', (datasnap) => {
      if (datasnap.val()) {
        const newDetails = datasnap.val();
        const updatedDetails = Object.entries(newDetails);
        const yesDetails = Object.values(updatedDetails);
        const newArray = yesDetails.filter(
          (obj) => obj[1].userId === retrievedUser,
        );
        setProfileData(newArray);
      }
    });
  };

  useEffect(() => {
    gettingData();
  }, []);

  const submitHandler = (phoneNumber) => {
    console.log(profileData[0][0]);
    var adaNameRef = firebaseobj
      .database()
      .ref(`ProfileDetails/${profileData[0][0]}`);
    adaNameRef.update({userNumber: phoneNumber});
  };

  const renderRotateView = () => {
    return <View style={styles.rotateView}></View>;
  };

  const renderAvatar = () => {
    return (
      <>
        {profileData.map((item, index) => (
          <LottieView
            style={styles.avatarStyle}
            source={
              item[1].userGender === 'Male'
                ? require('../../assets/animation/myAvatar.json')
                : require('../../assets/animation/femaleAvatar.json')
            }
            autoPlay
            loop
          />
        ))}
      </>
    );
  };

  const renderDetails = () => {
    return (
      <>
        {profileData.map((item, index) => (
          <View style={styles.detailsStyle}>
            <View>
              <Text style={styles.detailsStyleHeading}>Gender</Text>
              <Text style={styles.detailsStyleText}>{item[1].userGender}</Text>
            </View>

            <View>
              <Text style={styles.detailsStyleHeading}>Code</Text>
              <Text style={styles.detailsStyleText}>{item[1].userCode}</Text>
            </View>

            <View>
              <Text style={styles.detailsStyleHeading}>Age</Text>
              <Text style={styles.detailsStyleText}>{item[1].userAge}</Text>
            </View>
          </View>
        ))}
      </>
    );
  };

  const renderOtherDetailsHeading = () => {
    return (
      <>
        {profileData.map((item, index) => (
          <View style={styles.otherDetailsMainView}>
            <View style={styles.otherDetailsStyleView}>
              <Text style={styles.valueHeadingStyle}>Username</Text>
              <Text style={styles.valueStyle}>{updatedUserName}</Text>
            </View>

            <View style={styles.otherDetailsStyleView}>
              <Text style={styles.valueHeadingStyle}>Email</Text>
              <Text style={styles.valueStyle}>{user.email}</Text>
            </View>

            <View style={styles.otherDetailsStyleView}>
              <Text style={styles.valueHeadingStyle}>Phone Number</Text>
              <TextInput
                onChangeText={(text) => setPhoneNumber(text)}
                value={phoneNumber}>
                <Text style={styles.valueStyle}>{item[1].userNumber}</Text>
              </TextInput>
            </View>
          </View>
        ))}
      </>
    );
  };

  const updateProfileButton = () => {
    return (
      <TouchableOpacity
        onPress={() => submitHandler(phoneNumber)}
        style={styles.submitLoginView}>
        <Text style={styles.loginSubmitText}>Edit Profile</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainScreenView}>
      <StatusBar backgroundColor="brown" opacity="0.8" />
      <UserAccessHeader title="Profile Details" />
      {renderRotateView()}
      {renderAvatar()}
      {renderDetails()}
      {renderOtherDetailsHeading()}
      {updateProfileButton()}
    </View>
  );
}

export default ProfileScreen;
