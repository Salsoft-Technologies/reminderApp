import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  StatusBar,
  FlatList,
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
  const username = user.email.split('@')[0];
  const updatedUserName = username.charAt(0).toUpperCase() + username.slice(1);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [data, setData] = useState([
    {
      id: 1,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm',
    },
    {
      id: 2,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm',
    },

    {
      id: 3,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm',
    },

    {
      id: 4,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm',
    },

    {
      id: 5,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm',
    },
    {
      id: 6,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm',
    },
    {
      id: 7,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm',
    },
    {
      id: 8,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm',
    },
  ]);
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

  const renderTaskList = ({item}) => {
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
    return (
      <BoxShadow setting={shadowOpt}>
        <TouchableOpacity style={styles.elementView}>
          <LinearGradient
            colors={['#fb4444', '#fb4444', '#cc342c']}
            style={styles.listElementView}>
            <Text style={styles.listElementStyle}>{item.taskDescription}</Text>

            <Text style={styles.timeStyle}>
              {item.from} - {item.to}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </BoxShadow>
    );
  };

  const _renderList = () => {
    return (
      <FlatList
        data={data}
        renderItem={renderTaskList}
        keyExtractor={(item, index) => index.toString()}
      />
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
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} backdropColor='black'>
        <View style={styles.modalViewStyle}>
          <TextInput multiline={true} style={styles.modalInputStyle} placeholder='Type your task' placeholderTextColor='gray'></TextInput>
          <TouchableOpacity style={styles.modalSubmitButton} onPress={toggleModal}>
            <Text style={styles.modalSubmitTextStyle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };
  
  return (
    <>
      <HeaderComponent />
      <StatusBar backgroundColor="#fb4444" />
      {renderHomeHeader()}
      {renderTaskListHeading()}
      {_renderList()}
      {renderButton()}
      {renderModalMessage()}
    </>
  );
}

export default HomeScreen;
