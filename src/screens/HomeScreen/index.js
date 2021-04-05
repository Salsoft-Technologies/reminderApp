import React from 'react';
import {Text, View, StatusBar, TouchableOpacity, Image} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent/index';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

function HomeScreen() {
  const renderHomeHeader = () => {
    return (
      <View style={styles.homeHeaderStyleView}>
        <View>
          <Text style={styles.nameStyle}>Hey Kevin!</Text>
          <Text style={styles.dateStyle}>Oct 21st, 2020</Text>
        </View>

        <View style={styles.monthTextView}>
          <Text style={styles.monthTextStyle}>October</Text>
        </View>
      </View>
    );
  };

  const renderTaskListHeading = () => {
    return (
      <View style={styles.todaysTaskView}>
        <Text style={styles.todaysTaskStyle}>Today's Task</Text>
      </View>
    );
  };

  const renderTaskList = () => {
    return (
      <View>
        <View style={styles.listElementView}>
          <LinearGradient
            colors={['#d3655f', '#cc342c', '#fb4444']}

            style={styles.listElementView}>
            <Text style={styles.listElementStyle}>
              Design mobile app to-do list
            </Text>
          </LinearGradient>

          <LinearGradient
            colors={['#d3655f', '#cc342c', '#fb4444']}

            style={styles.listElementView}>
            <Text style={styles.listElementStyle}>
              Design mobile app to-do list
            </Text>
          </LinearGradient>
          
        </View>
      </View>
    );
  };

  const renderFooterButton = () => {
    return(
      <TouchableOpacity style={{backgroundColor: 'red', position: 'absolute'}}>
        <Image source={require('../../assets/images/plus.png')}/>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <HeaderComponent />
      <StatusBar backgroundColor="#fb4444" />
      {renderHomeHeader()}
      {renderTaskListHeading()}
      {renderTaskList()}
      {renderFooterButton()}
    </View>
  );
}

export default HomeScreen;
