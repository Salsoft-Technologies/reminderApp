import React from 'react';
import {Text, View, Image, Touchable, TouchableOpacity} from 'react-native';
import UserAccessHeader from '../../components/UserAccessHeader/index';

import styles from './styles';

function NotificationScreen({navigation}){
    const renderNotification = () => {
        return(
           <TouchableOpacity style={styles.notificationMainView}>
               <View style={styles.notificationBlueBar}>
               <Image resizeMode='contain' style={styles.notificationIconStyle} source={require('../../assets/images/message.png')}/>
               </View>

               <View style={styles.notificationHeadingView}>
                   <Text style={styles.notificationHeadingText}>Share this with your friends</Text>
                   <Text style={styles.notificationSubHeadingText}>Help them to track their routine</Text>
               </View>
           </TouchableOpacity>
        )
    }
    return(
        <View style={styles.mainScreen}>
        <UserAccessHeader title = 'Notifications'/>
        {renderNotification()}
        </View>
    )
}

export default NotificationScreen