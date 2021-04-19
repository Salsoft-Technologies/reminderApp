import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  Button,
  Platform,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent/index';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Modal from 'react-native-modal';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import Draggable from 'react-native-draggable';
import DateTimePicker from '@react-native-community/datetimepicker';
import {AuthContext} from '../../navigation/AuthProvider';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

import * as firebaseobj from 'firebase';
import {db} from '../../../config';
if (!firebaseobj.apps.length) {
  firebaseobj.initializeApp(db);
}

function HomeScreen() {
  const {user} = useContext(AuthContext);
  const [task, setTask] = useState('An Empty Task');
  const [taskItems, setTaskItems] = useState([]);
  const [checkingData, setCheckingData] = useState([]);
  const retrievedUser = user.uid;

  const [date, setDate] = useState(new Date(1598051730000));
  const [time, setTime] = useState();
  const [mode, setMode] = useState('date');

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
        setCheckingData(newArray);

        PushNotification.configure({
          onRegister: function (token) {
            console.log('TOKEN:', token);
          },
          onNotification: function (notification) {
            console.log('NOTIFICATION:', notification);
            notification.finish(PushNotificationIOS.FetchResult.NoData);
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
          requestPermissions: Platform.OS === 'ios',
        });
      }
    });
  };

  useEffect(() => {
    gettingData();
  }, []);

  {
    taskItems.map((item, index) =>
      PushNotification.localNotificationSchedule({
        title: 'Task Message',
        date: new Date(item[1].newDate),
        message: item[1].taskDescription,
        repeatType: 'hour',
        repeatTime: '1',
        allowWhileIdle: false,
        channelId: '4',
        playSound: true,
        soundName: 'default',
      }),
    );
  }

  const onChange = (event, selectedDate, selectedTime) => {
    const currentDate = selectedDate || date;
    const currentTime =
      selectedTime || currentDate.getHours() + ':' + currentDate.getMinutes();
    setDate(currentDate);
    setTime(currentTime);
  };

  const handleTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
    const Details = firebaseobj.database().ref('Details');
    Details.push({
      userId: user.uid,
      userEmail: user.email,
      taskDescription: task,
      newDate: date.getTime(),
      taskDate:
        date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
      taskTime: time,
    });
    setModalVisible(!isModalVisible);
  };

  const myDatePicker = () => {
    return (
      <View>
        <LinearGradient
          colors={['#ffffff', '#ece9e6', '#ece9e6']}
          style={styles.datePickerStyle}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'datetime'}
            is24Hour={true}
            onChange={onChange}
            textColor="black"
            minimumDate={new Date()}
            autoSize={true}
          />
          <TouchableOpacity
            style={styles.modalSubmitButton}
            onPress={toggleDateModal}>
            <Text style={styles.modalSubmitTextStyle}>Done</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* <LinearGradient
          colors={['#ffffff', '#ece9e6', '#ece9e6']}
          style={styles.datePickerStyle}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'time'}
            is24Hour={true}
            onChange={onChange}
            textColor="black"
            minimumDate={new Date()}
          />
        </LinearGradient> */}
      </View>
    );
  };

  PushNotification.createChannel(
    {
      channelId: '4', // (required)
      channelName: 'My channel', // (required)
      channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    },
    (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.);
  );

  PushNotification.getChannels(function (channel_ids) {
    console.log(channel_ids, 'channels'); // ['channel_id_1']
  });

  const username = user.email.split('@')[0];
  const updatedUserName = username.charAt(0).toUpperCase() + username.slice(1);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isDateModalVisible, setDateModalVisible] = useState(false);
  const toggleDateModal = () => {
    setDateModalVisible(!isDateModalVisible);
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
          <LinearGradient
            colors={['#ffffff', '#ece9e6', '#ece9e6']}
            style={styles.modalInputStyle}>
            <TextInput
              onChangeText={(text) => setTask(text)}
              placeholder="Type your task"
              placeholderTextColor="gray"></TextInput>
          </LinearGradient>

          <LinearGradient colors={['#ffffff', '#ece9e6', '#ece9e6']}>
            <TouchableOpacity
              style={styles.calendarButton}
              onPress={toggleDateModal}>
              <View style={styles.calendarButtonView}>
                <Image
                  resizeMode="contain"
                  style={styles.calendarButtonIcon}
                  source={require('../../assets/images/calendar.png')}
                />
              </View>

              <View style={styles.pickDateTextView}>
                <Text style={styles.pickDateText}>Pick date and time</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>

          <Modal
            isVisible={isDateModalVisible}
            onBackdropPress={toggleDateModal}
            backdropColor="black">
            {myDatePicker()}
          </Modal>

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
    return (
      <View style={styles.elementView}>
        <LinearGradient
          colors={['#ffffff', '#ece9e6', '#ece9e6']}
          style={styles.notificationMainView}>
          <View style={styles.listItemView}>
            <View style={styles.notificationBlueBar}></View>
            <View style={styles.notificationHeadingView}>
              <Text style={styles.notificationSubHeading}>
                {item[1].taskDescription}
              </Text>

              <View style={styles.listSubItemsView}>
                <Text style={styles.notificationSubHeadingText}>Time:</Text>
                <Text style={styles.notificationSubHeadingText}>
                  {item[1].taskDate} {item[1].taskTime}
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={styles.deletedButton}
            onPress={() => deleteAd(item)}>
            <Image
              resizeMode="contain"
              source={require('../../assets/images/check.png')}
              style={styles.checkIconStyle}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  };

  const newButton = () => {
    return (
      <Draggable x={370} y={600}>
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
      </Draggable>
    );
  };

  return (
    <>
      <HeaderComponent />
      <StatusBar backgroundColor="brown" opacity="0.9" />
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
      {Platform.OS === 'android' ? renderButton() : newButton()}

      {renderModalMessage()}
    </>
  );
}

export default HomeScreen;
