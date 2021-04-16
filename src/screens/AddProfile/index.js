import React, {useState, useEffect, useContext} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import UserAccessHeader from '../../components/UserAccessHeader/index';
import Modal from 'react-native-modal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AuthContext} from '../../navigation/AuthProvider';
import styles from './styles';
import * as firebaseobj from 'firebase';
import {db} from '../../../config';
if (!firebaseobj.apps.length) {
  firebaseobj.initializeApp(db);
}

function AddProfile({navigation}) {
  const [age, setAge] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [gender, SetGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const {user} = useContext(AuthContext);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const submitHandler = (age, countryCode, gender, phoneNumber) => {
    if ((age === '', countryCode === '', gender === '', phoneNumber === '')) {
      alert('Some fields are missing');
    } else {
      const ProfileDetails = firebaseobj.database().ref('ProfileDetails');
      ProfileDetails.push({
        userId: user.uid,
        userEmail: user.email,
        userAge: age,
        userCode: countryCode,
        userGender: gender,
        userNumber: phoneNumber,
      });
      setModalVisible(!isModalVisible);
      navigation.navigate('StartScreen');
    }
  };

  const renderTextFields = () => {
    return (
      <KeyboardAwareScrollView>
        <TextInput
          style={styles.textInputBox}
          onChangeText={(text) => setAge(text)}
          value={age}
          placeholder="Age"
          placeholderTextColor="#5e6276"
          required={true}
          color="#5e6276"
          keyboardType="name-phone-pad"
        />

        <TextInput
          style={styles.textInputBox}
          onChangeText={(text) => setCountryCode(text)}
          value={countryCode}
          placeholder="Code"
          placeholderTextColor="#5e6276"
          required={true}
          color="#5e6276"
          keyboardType="name-phone-pad"
        />

        <TextInput
          style={styles.textInputBox}
          onChangeText={(text) => SetGender(text)}
          value={gender}
          placeholder="Gender"
          placeholderTextColor="#5e6276"
          required={true}
          color="#5e6276"
        />

        <TextInput
          style={styles.textInputBox}
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          placeholder="Phone Number"
          placeholderTextColor="#5e6276"
          required={true}
          color="#5e6276"
        />
        {renderSubmitButton()}
      </KeyboardAwareScrollView>
    );
  };

  const renderAlertMessage = () => {
    return (
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        backdropColor="black">
        <View style={styles.modalViewStyle}>
          <View style={styles.successModal}>
            <Image
              resizeMode="contain"
              style={styles.iconStyle}
              source={require('../../assets/images/success.png')}
            />
          </View>

          <View style={styles.messageView}>
            <Text style={styles.successStyle}>Success</Text>
            <Text style={styles.messageStyle}>
              Your Details have been added
            </Text>
          </View>
        </View>
      </Modal>
    );
  };

  const renderSubmitButton = () => {
    return (
      <TouchableOpacity
        onPress={() => submitHandler(age, countryCode, gender, phoneNumber)}
        style={styles.submitLoginView}>
        <Text style={styles.loginSubmitText}>Submit</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainScreenView}>
      <UserAccessHeader title="Add Profile" />
      {renderTextFields()}
      {renderAlertMessage()}
    </View>
  );
}

export default AddProfile;
