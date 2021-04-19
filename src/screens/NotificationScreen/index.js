import React from 'react';
import {
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  Share,
} from 'react-native';
import UserAccessHeader from '../../components/UserAccessHeader/index';

import styles from './styles';

function NotificationScreen({navigation}) {
  const onShare = async () => {
    const invitation =
      'Hey there, stuck at remembering your routine? Let me help you';
    try {
      const result = await Share.share({
        message: invitation,
      });
    } catch (error) {}
  };

  const renderNotification = () => {
    return (
      <TouchableOpacity
        onPress={() => onShare()}
        style={styles.notificationMainView}>
        <View style={styles.notificationBlueBar}>
          <Image
            resizeMode="contain"
            style={styles.notificationIconStyle}
            source={require('../../assets/images/message.png')}
          />
        </View>

        <View style={styles.notificationHeadingView}>
          <Text style={styles.notificationHeadingText}>
            Share this with your friends
          </Text>
          <Text style={styles.notificationSubHeadingText}>
            Help them to track their routine
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainScreen}>
      <UserAccessHeader
        customIcon={require('../../assets/images/blackBack.png')}
        customStyle={{color: 'black'}}
        title="Notifications"
      />
      {renderNotification()}
    </View>
  );
}

export default NotificationScreen;
