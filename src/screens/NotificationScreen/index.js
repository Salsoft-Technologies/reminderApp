import React from 'react';
import {Text, View, Image, Touchable, TouchableOpacity} from 'react-native';
import UserAccessHeader from '../../components/UserAccessHeader/index';

import styles from './styles';

function NotificationScreen({navigation}){
    const renderNotification = () => {
        return(
           <View style={styles.notificationMainView}>
               <View>
               <Image resizeMode='contain' style={styles.notificationIconStyle} source={require('../../assets/images/tick.png')}/>
               </View>

               <View style={styles.notificationHeadingView}>
                   <Text style={styles.notificationHeadingText}>A successful toast</Text>
               </View>
           </View>
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