import React, {useContext} from 'react';
import {Share, Text, View, StatusBar} from 'react-native';
import UserAccessHeader from '../../components/UserAccessHeader/index';
import LottieView from 'lottie-react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../../navigation/AuthProvider';

function ProfileScreen() {
  const {user} = useContext(AuthContext);
  const username = user.email.split('@')[0];
  const updatedUserName = username.charAt(0).toUpperCase() + username.slice(1);

  const renderRotateView = () => {
    return <View style={styles.rotateView}></View>;
  };

  const renderAvatar = () => {
    return (
      <LottieView
        style={styles.avatarStyle}
        source={require('../../assets/animation/myAvatar.json')}
        autoPlay
        loop
      />
    );
  };

  const renderDetails = () => {
    return (
      <View style={styles.detailsStyle}>
        <View>
          <Text style={styles.detailsStyleHeading}>Gender</Text>
          <Text style={styles.detailsStyleText}>Male</Text>
        </View>

        <View>
          <Text style={styles.detailsStyleHeading}>Code</Text>
          <Text style={styles.detailsStyleText}>+92</Text>
        </View>

        <View>
          <Text style={styles.detailsStyleHeading}>Age</Text>
          <Text style={styles.detailsStyleText}>23</Text>
        </View>
      </View>
    );
  };

  const renderOtherDetailsHeading = () => {
    return (
      <View style={styles.otherDetailsMainView}>
        <View style={styles.otherDetailsStyleView}>
          <Text style={styles.valueHeadingStyle}>Username</Text>
          <Text style={styles.valueStyle}>{updatedUserName}</Text>
        </View>

        <View style={styles.otherDetailsStyleView}>
          <Text style={styles.valueHeadingStyle}>Email</Text>
          <Text style={styles.valueStyle}>{user.email}</Text>
        </View>

        <View style={styles.otherDetailsStyleView}>
          <Text style={styles.valueHeadingStyle}>Phone Number</Text>
          <Text style={styles.valueStyle}>+123456789</Text>
        </View>
      </View>
    );
  };

  const onShare = async () => {
    const invitation =
      'Hey there, stuck at remembering your routine? Let me help you';
    try {
      const result = await Share.share({
        message: invitation,
      });
    } catch (error) {}
  };

  const renderInviteOthers = () => {
    return (
      <TouchableOpacity onPress={() => onShare()} style={styles.inviteButton}>
        <Text style={styles.inviteText}>Invite others</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainScreenView}>
      <StatusBar backgroundColor="#fb4050" />
      <UserAccessHeader title="Profile Details" />
      {renderRotateView()}
      {renderAvatar()}
      {renderDetails()}
      {renderOtherDetailsHeading()}
      {renderInviteOthers()}
    </View>
  );
}

export default ProfileScreen;
