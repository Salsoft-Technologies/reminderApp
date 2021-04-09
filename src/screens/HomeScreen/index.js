import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent/index';
import LinearGradient from 'react-native-linear-gradient';
import {BoxShadow} from 'react-native-shadow';
import styles from './styles';
import Modal from 'react-native-modal';
import {AuthContext} from '../../navigation/AuthProvider';

function HomeScreen() {
  const {user} = useContext(AuthContext);
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
    setModalVisible(!isModalVisible);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  const username = user.email.split('@')[0];
  const updatedUserName = username.charAt(0).toUpperCase() + username.slice(1);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderHomeHeader = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const d = new Date();
    const todaysDate =
      months[d.getMonth()] + '-' + d.getDate() + '-' + d.getFullYear();
    const monthName = months[d.getMonth()];

    return (
      <View style={styles.homeHeaderStyleView}>
        <View>
          <Text style={styles.nameStyle}>Hey {updatedUserName}!</Text>
          <Text style={styles.dateStyle}>{todaysDate}</Text>
        </View>

        <View style={styles.monthTextView}>
          <Text style={styles.monthTextStyle}>{monthName}</Text>
        </View>
      </View>
    );
  };

  const renderTaskListHeading = () => {
    return (
      <View style={styles.todaysTaskView}>
        <Text style={styles.todaysTaskStyle}>Your Tasks</Text>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <TouchableOpacity onPress={toggleModal} style={styles.tabPlusButton}>
        <LinearGradient
          colors={['#8e2de2', '#4a00e0', '#8066dc']}
          style={styles.buttonStyle}>
          <Image
            resizeMode="contain"
            source={require('../../assets/images/plus.png')}
          />
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  const renderModalMessage = () => {
    return (
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        backdropColor="black">
        <View style={styles.modalViewStyle}>
          <TextInput
            onChangeText={(text) => setTask(text)}
            multiline={true}
            style={styles.modalInputStyle}
            placeholder="Type your task"
            placeholderTextColor="gray"></TextInput>
          <TouchableOpacity
            style={styles.modalSubmitButton}
            onPress={handleTask}>
            <Text style={styles.modalSubmitTextStyle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  const renderList = () => {
    const shadowOpt = {
      width: 280,
      height: 80,
      color: '#fb3f56',
      border: 0,
      radius: 10,
      opacity: 0.06,
      x: 3,
      y: 3,
      style: {marginVertical: 2},
    };
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return (
      <ScrollView>
        {taskItems.map((item, index) => {
          return (
            <BoxShadow key={index} setting={shadowOpt}>
              <TouchableOpacity
                onPress={() => completeTask(index)}
                style={styles.elementView}>
                <LinearGradient
                  colors={['#fb4444', '#fb4444', '#cc342c']}
                  style={styles.listElementView}>
                  <Text style={styles.listElementStyle}>{item}</Text>

                  <Text style={styles.timeStyle}>
                    Date - {date}
                    Time - {time}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </BoxShadow>
          );
        })}
      </ScrollView>
    );
  };
  return (
    <>
      <HeaderComponent />
      <StatusBar backgroundColor="#fb4444" />
      {renderHomeHeader()}
      {renderTaskListHeading()}
      {renderList()}
      {renderButton()}
      {renderModalMessage()}
    </>
  );
}

export default HomeScreen;
