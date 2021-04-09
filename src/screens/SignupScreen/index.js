import React, {useState, useEffect, useContext} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import LottieView from 'lottie-react-native';
import UserAccessHeader from '../../components/UserAccessHeader/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {AuthContext} from '../../navigation/AuthProvider';

function SignupScreen({navigation}) {
  const {register, user} = useContext(AuthContext)
  const [name, SetName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const renderSignUpAnimation = () => {
    return(
        <LottieView style={styles.signUpAnimationStyle} source={require('../../assets/animation/signUpAnimation.json')} autoPlay loop />
    )
}
  const renderTextFields = () => {
    return (
      <View style={styles.textFieldsView}>
        <Text style={styles.emailTextStyle}>Name</Text>
        <TextInput
          onChangeText={(text) => SetName(text)}
          value={name}
          placeholderTextColor="gray"
          style={name === '' ? styles.textEmptyFields : styles.textFields}
          placeholder="Enter your name"></TextInput>

        <Text style={styles.passwordTextStyle}>Email</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholderTextColor="gray"
          style={email === '' ? styles.textEmptyFields : styles.textFields}
          placeholder="Enter your mail"></TextInput>

        <Text style={styles.passwordTextStyle}>Password</Text>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholderTextColor="gray"
          style={password === '' ? styles.textEmptyFields : styles.textFields}
          placeholder="Enter your password"></TextInput>
      </View>
    );
  };

  const signUpButton = () => {
    return (
      <TouchableOpacity onPress={() => register(email, password, name)} style={styles.submitLoginView}>
        <Text style={styles.loginSubmitText}>Create Account</Text>
      </TouchableOpacity>
    );
  };

  const disclaimerText = () => {
    return (
      <View style={styles.noAccountView}>
        <Text style={styles.noAccountText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.createHereText}> Log in</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.mainScreenStyle}>
      <UserAccessHeader title="Sign up" />
      {renderSignUpAnimation()}
      <KeyboardAwareScrollView>
      {renderTextFields()}
      {signUpButton()}
      {disclaimerText()}
      </KeyboardAwareScrollView>
   
    </View>
  );
}

export default SignupScreen;
