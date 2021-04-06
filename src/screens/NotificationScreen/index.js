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
                   <Text style={styles.notificationHeadingText}>Did you know?</Text>
                   <Text style={styles.notificationSubHeadingText}>Here is something that you need to know</Text>
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