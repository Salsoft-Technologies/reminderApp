import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import UserAccessHeader from '../../components/UserAccessHeader/index';
import styles from './styles';

function LoginScreen(){

    const renderTextFields = () => {
        return(
            <View style={styles.textFieldsView}>
            <Text style={styles.emailTextStyle}>Email</Text>
            <TextInput placeholderTextColor='gray' style={styles.textFields} placeholder='Enter your mail'></TextInput>

            <Text style={styles.passwordTextStyle}>Password</Text>
            <TextInput placeholderTextColor='gray' style={styles.textFields} placeholder='Enter your mail'></TextInput>
            </View>
        )
    }

    const loginButton = () => {
        return(
            <TouchableOpacity style={styles.submitLoginView}>
                <Text style={styles.loginSubmitText}>Log in</Text>
            </TouchableOpacity>
        )
    }

    const disclaimerText = () => {
        return(
            <View style={styles.noAccountView}>
          <Text style={styles.noAccountText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.createHereText}> Sign up</Text>
          </TouchableOpacity>
        </View>
        )
    }
    return(
        <View style={styles.mainScreenStyle}>
        <UserAccessHeader title='Log in'/>
        {renderTextFields()}
        {loginButton()}
        {disclaimerText()}
        </View>
    )
}

export default LoginScreen;