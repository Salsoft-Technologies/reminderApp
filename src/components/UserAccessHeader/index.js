import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

function UserAccessHeader(props) {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity style={styles.headerIconView}>
        <Image
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
