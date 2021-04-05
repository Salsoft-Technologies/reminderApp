import React from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar, ImageBackground} from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

function StartScreen({navigation}) {
  const renderImageContainer = () => {
    return (
        <LottieView
          style={styles.animationStyle}
          source={require('../../assets/animation/started2.json')}
          autoPlay
          loop
        />
    );
  };

  const renderHeading = () => {
    return (
      <View style={styles.headingStyleView}>
        <Text style={styles.headingTextStyle}>Ra<Image style={styles.iconPStyle} source={require('../../assets/logo/p.png')}/><Image style={styles.iconPStyle} source={require('../../assets/logo/p.png')}/>el</Text>
      </View>
    );
  };

  const renderTagLine = () => {
    return (
      <View style={styles.tagLineStyleView}>
        <Text style={styles.tagLineStyle}>A to-do manager </Text>
        <Text style={styles.tagLineStyle2}>you can trust</Text>
      </View>
    );
  };

  const renderSubTagLine = () => {
    return (
      <View style={styles.subTagLineView}>
        <Text style={styles.subTagLineStyle}>Take control over your</Text>
        <Text style={styles.subTagLineStyle}>schedule unlike never before</Text>

      </View>
    );
  };

  const renderGetStartedButton = () => {
    return (
      <TouchableOpacity onPress={()=> navigation.navigate('MyTab')} style={styles.startButton}>
      <LinearGradient colors={['#d3655f', '#cc342c', '#fb4444']} style={styles.linearButton}><Text style={styles.startButtonTextStyle}>Get Started</Text></LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <View source={require('../../assets/images/getStartedWallpaper.png')} style={styles.mainScreenStyle}>
      <StatusBar backgroundColor="#fff" />

      {renderImageContainer()}
      {renderHeading()}
      {renderTagLine()}
      {renderSubTagLine()}
      {renderGetStartedButton()}
    </View>
  );
}

export default StartScreen;
