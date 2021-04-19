import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import UserAccessHeader from '../../components/UserAccessHeader/index';
import LottieView from 'lottie-react-native';
import styles from './styles';
import {AuthContext} from '../../navigation/AuthProvider';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import * as firebaseobj from 'firebase';
import {db} from '../../../config';
if (!firebaseobj.apps.length) {
  firebaseobj.initializeApp(db);
}

function ProfileScreen() {
  const {user} = useContext(AuthContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [gender, setGender] = useState('');
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

  const submitHandler = (phoneNumber, age, countryCode, gender) => {
    console.log(profileData[0][0]);
    var adaNameRef = firebaseobj
      .database()
      .ref(`ProfileDetails/${profileData[0][0]}`);
    adaNameRef.update({
      userNumber: phoneNumber,
      userGender: gender,
      userCode: countryCode,
      userAge: age,
    });
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
          <KeyboardAwareScrollView style={styles.otherDetailsMainView}>
            <View style={styles.otherDetailsStyleView}>
              <Text style={styles.valueHeadingStyle}>Username</Text>
              <Text style={styles.valueStyle}>{updatedUserName}</Text>
            </View>

            <View style={styles.otherDetailsStyleView}>
              <Text style={styles.valueHeadingStyle}>Email</Text>
              <Text style={styles.valueStyle}>{user.email}</Text>
            </View>

            <View style={styles.otherDetailsStyleView}>
              <Text style={styles.valueHeadingStyle}>
                Your phone number is: {item[1].userNumber}
              </Text>
              <TextInput
                onChangeText={(text) => setPhoneNumber(text)}
                placeholder="Enter new number">
                <Text style={styles.valueStyle}>{item[1].userNumber}</Text>
              </TextInput>
            </View>

            <View style={styles.otherDetailsStyleView}>
              <Text style={styles.valueHeadingStyle}>
                Your Gender is: {item[1].userGender}
              </Text>
              <TextInput
                onChangeText={(text) => setGender(text)}
                placeholder="Change your Gender">
                <Text style={styles.valueStyle}>{item[1].userGender}</Text>
              </TextInput>
            </View>

            <View style={styles.otherDetailsStyleView}>
              <Text style={styles.valueHeadingStyle}>
                Your country code is: {item[1].userCode}
              </Text>
              <TextInput
                onChangeText={(text) => setCountryCode(text)}
                placeholder="Change your country code">
                <Text style={styles.valueStyle}>{item[1].userCode}</Text>
              </TextInput>
            </View>

            <View style={styles.otherDetailsStyleView}>
              <Text style={styles.valueHeadingStyle}>
                Your age is: {item[1].userAge}
              </Text>
              <TextInput
                onChangeText={(text) => setAge(text)}
                placeholder="Edit your age">
                <Text style={styles.valueStyle}>{item[1].userAge}</Text>
              </TextInput>
            </View>
          </KeyboardAwareScrollView>
        ))}
      </>
    );
  };

  const updateProfileButton = () => {
    return (
      <TouchableOpacity
        onPress={() => submitHandler(phoneNumber, age, countryCode, gender)}
        style={styles.submitLoginView}>
        <Text style={styles.loginSubmitText}>Edit Profile</Text>
      </TouchableOpacity>
    );
  };

  console.log(profileData);
  return (
    <View style={styles.mainScreenView}>
      <StatusBar backgroundColor="brown" opacity="0.8" />
      <UserAccessHeader title="Profile Details" />
      {profileData.length <= 0 ? (
        <View style={styles.profileDisclaimerView}>
          <Text style={styles.profileDisclaimer}>
            Please add a profile first
          </Text>
        </View>
      ) : (
        <>
          {renderRotateView()}
          {renderAvatar()}
          {renderDetails()}
          {renderOtherDetailsHeading()}
          {updateProfileButton()}
        </>
      )}
    </View>
  );
}

export default ProfileScreen;
