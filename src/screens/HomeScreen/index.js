import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent/index';
import LinearGradient from 'react-native-linear-gradient';
import {BoxShadow} from 'react-native-shadow';
import styles from './styles';
import Modal from 'react-native-modal';
import PushNotification from 'react-native-push-notification';
import {AuthContext} from '../../navigation/AuthProvider';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

import * as firebaseobj from 'firebase';
import {db} from '../../../config';
if (!firebaseobj.apps.length) {
  firebaseobj.initializeApp(db);
}

function HomeScreen() {
  const {user} = useContext(AuthContext);
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const retrievedUser = user.uid;

  const gettingData = () => {
    const theDetails = firebaseobj.database().ref('Details');
    theDetails.on('value', (datasnap) => {
      if (datasnap.val()) {
        const newDetails = datasnap.val();
        const updatedDetails = Object.entries(newDetails);
        const yesDetails = Object.values(updatedDetails);
        const newArray = yesDetails.filter(
          (obj) => obj[1].userId === retrievedUser,
        );
        setTaskItems(newArray);

        PushNotification.configure({
          onRegister: function (token) {
            console.log('TOKEN:', token);
          },
          onNotification: function (notification) {
            console.log('NOTIFICATION:', notification);
            // notification.finish(PushNotificationIOS.FetchResult.NoData);
          },
          onAction: function (notification) {
            console.log('ACTION:', notification.action);
            console.log('NOTIFICATION:', notification);
          },
          onRegistrationError: function (err) {
            console.error(err.message, err);
          },
          permissions: {
            alert: true,
            badge: true,
            sound: true,
          },
          popInitialNotification: true,
          requestPermissions: true,
        });
      }
    });
  };

  useEffect(() => {
    gettingData();
    {
      taskItems
        ? PushNotification.localNotificationSchedule({
            title: 'Task Message',
            date: new Date(Date.now() + 3 * 1000),
            message: 'You have a task to complete',
            repeatType: 'minute',
            repeatTime: '1',
            allowWhileIdle: false,
            channelId: '4',
            playSound: true,
            soundName: 'default',
          })
        : null;
    }
  }, []);

  const handleTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
    const Details = firebaseobj.database().ref('Details');
    Details.push({
      userId: user.uid,
      userEmail: user.email,
      taskDescription: task,
      taskDate:
      new Date().getFullYear() +
        '-' +
        (new Date().getMonth() + 1) +
        '-' +
        new Date().getDate(),
      taskTime: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    });
    setModalVisible(!isModalVisible);
  };

  // PushNotification.createChannel(
  //   {
  //     channelId: '4', // (required)
  //     channelName: 'My channel', // (required)
  //     channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
  //     soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
  //     importance: 4, // (optional) default: 4. Int value of the Android notification importance
  //     vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  //   },
  //   (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.);
  // );

  // PushNotification.getChannels(function (channel_ids) {
  //   console.log(channel_ids, 'channels'); // ['channel_id_1']
  // });
  
  
 


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

  const deleteAd = (item, index, key) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    firebaseobj.database().ref(`Details/${item[0]}`).remove();
  };

  const _renderFirstItems = ({item}) => {
    const shadowOpt = {
      width: 69 * vw,
      // height: 85,
      height: 13 * vh,
      color: '#fb3f56',
      border: 0,
      radius: 10,
      opacity: 0.06,
      x: 3,
      y: 7,
      style: {marginVertical: 2},
    };
    return (
      <BoxShadow setting={shadowOpt}>
        <View
          style={styles.elementView}>
          <LinearGradient
            colors={['#fb4444', '#fb4444', '#cc342c']}
            style={styles.listElementView}>
            <View style={styles.rowView}>
            <Text style={styles.listElementStyle}>
              {item[1].taskDescription}
            </Text>

            <Text style={styles.timeStyle}>
              Date - {item[1].taskDate}   Time - {item[1].taskTime}
            </Text>
            </View>

            <TouchableOpacity onPress={() => deleteAd(item)}>
            <Image resizeMode='center' source={require('../../assets/images/delete.png')}/>
          </TouchableOpacity>
         
          </LinearGradient>
        </View>
      </BoxShadow>
    );
  };

  return (
    <>
      <HeaderComponent />
      <StatusBar backgroundColor="brown" opacity= '0.9' />
      {renderHomeHeader()}
      {renderTaskListHeading()}
      {taskItems != '' ? (
        <FlatList
          data={taskItems}
          renderItem={_renderFirstItems}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.noTasksView}>
          <Text style={styles.noTasksTextStyle}>No tasks assigned</Text>
        </View>
      )}

      {renderButton()}
      {renderModalMessage()}
    </>
  );
}

export default HomeScreen;
