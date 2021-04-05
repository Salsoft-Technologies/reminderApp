import { StyleSheet } from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
    mainScreen: {
        flex:1 , backgroundColor: 'black',
        padding: 2 * vh
    },

    notificationMainView: {
        flexDirection: 'row',
        backgroundColor: '#fcedea',
        borderWidth: 2,
        borderColor: '#d85335',
        paddingHorizontal: 3 * vw,
        borderRadius: 7 * vw,
        marginTop: 3 * vh

    },

    notificationHeadingView:{
        justifyContent: 'center',
        paddingLeft: 2 * vw
    },

    notificationHeadingText:{
        fontSize: 2.5 * vh
    },

    notificationIconStyle:{
        height: 10 * vh,
        width: 12 * vw
    }


})