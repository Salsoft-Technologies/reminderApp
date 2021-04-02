import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import UserAccessHeader from '../../components/UserAccessHeader/index';
import styles from './styles';

function SignupScreen({navigation}){

    const renderTextFields = () => {
        return(
            <View style={styles.textFieldsView}>
            <Text style={styles.emailTextStyle}>Name</Text>
            <TextInput placeholderTextColor='gray' style={styles.textFields} placeholder='Enter your name'></TextInput>

            <Text style={styles.passwordTextStyle}>Email</Text>
            <TextInput placeholderTextColor='gray' style={styles.textFields} placeholder='Enter your mail'></TextInput>

            <Text style={styles.passwordTextStyle}>Password</Text>
            <TextInput secureTextEntry={true} placeholderTextColor='gray' style={styles.textFields} placeholder='Enter your password'></TextInput>
            </View>
        )
    }

    const signUpButton = () => {
        return(
            <TouchableOpacity style={styles.submitLoginView}>
                <Text style={styles.loginSubmitText}>Create Account</Text>
            </TouchableOpacity>
        )
    }

    const disclaimerText = () => {
        return(
            <View style={styles.noAccountView}>
          <Text style={styles.noAccountText}>Already have an account? </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
            <Text style={styles.createHereText}> Log in</Text>
          </TouchableOpacity>
        </View>
        )
    }
    return(
        <View style={styles.mainScreenStyle}>
        <UserAccessHeader title='Sign up'/>
        {renderTextFields()}
        {signUpButton()}
        {disclaimerText()}
        </View>
    )
}

export default SignupScreen;