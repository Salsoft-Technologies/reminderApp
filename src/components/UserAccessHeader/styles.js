import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    paddingTop: 1.5 * vh
  },

  headerIconView: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2 * vw,
    padding: 1.5 * vw,
  },

  loginHeaderTextView: {
      justifyContent: 'center',
      alignSelf: 'center',
      paddingLeft: 4 * vw,
  },

  loginHeaderTextStyle: {
      color: 'white',
      fontSize: 3.5 * vh,
      fontWeight: 'bold'
    },

    iconStyle: {
        height: 20, width: 20
    }
});
