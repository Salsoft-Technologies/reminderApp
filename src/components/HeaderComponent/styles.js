import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  menuIcon: {
    height: 5 * vh,
    width: 6 * vw,
  },

  notificationIcon: {
    height: 5 * vh,
    width: 9 * vw,
  },

  mainHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4 * vw,
    paddingTop: 4 * vh,
  },
});
