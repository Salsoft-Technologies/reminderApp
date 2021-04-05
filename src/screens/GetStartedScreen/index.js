import React from 'react';
import {Text, View, Image, TouchableOpacity, ImageBackground, StatusBar} from 'react-native';
import styles from './styles';

function GetStartedScreen({navigation}){
    const renderHeaderIcon = () => {
        return(
            <View>
                <Image style={{height: 60, width: 60}} resizeMode='contain' source={require('../../assets/logo/logo.png')} />
            </View>
        )
    }

    const renderHeading = () => {
        return(
            <View style={styles.headingTextView}>
                <Text style={styles.headingAlwaysText}>
                    Always Remember
                </Text>

                <Text style={styles.headingAlwaysText}>
                    your routine
                </Text>
            </View>
        )
    }

    const renderAccessButtons = () => {
        return(
            <View style={styles.mainAccessButtonsView}>
                <TouchableOpacity onPress={()=> navigation.navigate('SignUpScreen') } style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen') } style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Sign in</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return(
        <ImageBackground source={require('../../assets/images/wallpaper.jpg')} imageStyle= 
        {{opacity:0.5, backgroundColor: 'black'}} style={styles.mainScreen}>
            <StatusBar backgroundColor="#fb4444" />
            {renderHeaderIcon()}
            {renderHeading()}
            {renderAccessButtons()}
        </ImageBackground>
    )
}

export default GetStartedScreen;