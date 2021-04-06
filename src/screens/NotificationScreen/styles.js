import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: 'black',
    padding: 2 * vh,
  },

  notificationMainView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 2,
    paddingHorizontal: 3 * vw,
    borderRadius: 3 * vw,
    marginTop: 3 * vh,
    padding: 2 * vh,
  },

  notificationHeadingView: {
    justifyContent: 'center',
    paddingLeft: 2 * vw,
  },

  notificationHeadingText: {
    fontSize: 2.5 * vh,
  },

  notificationSubHeadingText: {
    fontSize: 2 * vh,
    color: 'gray',
  },

  notificationIconStyle: {
    height: 8 * vh,
    width: 10 * vw,
    marginLeft: 2 * vh,
  },

  notificationBlueBar: {
    borderLeftWidth: 3,
    borderColor: '#017bc2',
  },
});
