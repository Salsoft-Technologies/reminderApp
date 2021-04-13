import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

function UserAccessHeader(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.headerView}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIconView}>
        <Image
        resizeMode='contain'
          style={styles.iconStyle}
          source={require('../../assets/images/back.png')}
        />
      </TouchableOpacity>

      <View style={styles.loginHeaderTextView}>
        <Text style={styles.loginHeaderTextStyle}>{props.title}</Text>
      </View>
    </View>
  );
}

export default UserAccessHeader;
