import React, {useState, useEffect, useContext} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import LottieView from 'lottie-react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AuthContext} from '../../navigation/AuthProvider';
import UserAccessHeader from '../../components/UserAccessHeader/index';
import styles from './styles';

function LoginScreen({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, user} = useContext(AuthContext);

    const checkLoginHandler = (email, password) => {
        if (email === '' && password === '') {
          alert('Email or Password is missing');
        } else {
          login(email, password);
        }
      };

    const renderAnimation = () => {
        return(
            <LottieView style={styles.animationStyle} source={require('../../assets/animation/myAnimation2.json')} autoPlay loop />
        )
    }

    const renderTextFields = () => {
        return(
            <View style={styles.textFieldsView}>
            <Text style={styles.emailTextStyle}>Email</Text>
            <TextInput onChangeText={(text) => setEmail(text)} value={email} placeholderTextColor='gray' style={email === '' ? styles.textEmptyFields : styles.textFields} placeholder='Enter your mail'></TextInput>

            <Text style={styles.passwordTextStyle}>Password</Text>
            <TextInput onChangeText={(text)=> setPassword(text)} value={password} secureTextEntry={true} placeholderTextColor='gray' style={password === '' ? styles.textEmptyFields : styles.textFields} placeholder='Enter your password'></TextInput>
            </View>
        )
    }

    const loginButton = () => {
        return(
            <TouchableOpacity onPress={() => checkLoginHandler(email, password)} style={styles.submitLoginView}>
                <Text style={styles.loginSubmitText}>Log in</Text>
            </TouchableOpacity>
        )
    }

    const disclaimerText = () => {
        return(
        <View style={styles.noAccountView}>
          <Text style={styles.noAccountText}>Don't have an account? </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('SignUpScreen')}>
            <Text style={styles.createHereText}> Sign up</Text>
          </TouchableOpacity>
        </View>
        )
    }
    return(
        <View style={styles.mainScreenStyle}>
        <UserAccessHeader title='Log in'/>
        {renderAnimation()}
        <KeyboardAwareScrollView>
        {renderTextFields()}
        {loginButton()}
        {disclaimerText()}
        </KeyboardAwareScrollView>
        </View>
    )
}

export default LoginScreen;