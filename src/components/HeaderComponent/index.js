import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import 'react-native-gesture-handler';

import styles from './styles';

function HeaderComponent(){
    const navigation = useNavigation();
    return(
        <View style={styles.mainHeaderView}>
            <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
            <Image resizeMode='contain' style={styles.menuIcon} source={require('../../assets/images/menu.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
            <Image resizeMode='contain' style={styles.notificationIcon} source={require('../../assets/images/notification.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderComponent;