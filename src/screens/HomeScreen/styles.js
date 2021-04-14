import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';
import {NativeViewGestureHandler} from 'react-native-gesture-handler';

export default StyleSheet.create({
  homeHeaderStyleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4 * vw,
    paddingTop: 3 * vh,
  },

  nameStyle: {
    fontSize: 3.5 * vh,
    letterSpacing: 0.1 * vw,
  },

  dateStyle: {
    color: '#b7acf8',
    fontWeight: 'bold',
  },

  monthTextStyle: {
    color: '#fff',
  },

  monthTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginVertical: 2 * vh,
    borderRadius: 2 * vh,
    paddingHorizontal: 2 * vw,
    backgroundColor: '#aaaaaa',
  },

  todaysTaskView: {
    paddingHorizontal: 4 * vw,
    paddingTop: 2 * vh,
  },

  todaysTaskStyle: {
    fontSize: 2.5 * vh,
    fontWeight: 'bold',
    letterSpacing: 0.2 * vw,
  },

  listElementView: {
    padding: 2.5 * vh,
    borderRadius: 5 * vw,
    flexDirection: 'row',
  },

  elementView: {
    padding: 0.5 * vh,
    paddingHorizontal: 2 * vw,
    width: 80 * vw,
  },

  listElementStyle: {
    color: '#fff',
  },

  timeStyle: {
    color: 'lightgray',
    fontSize: 1.8 * vh,
    paddingTop: 0.5 * vh,
    fontWeight: 'bold',
  },

  footerButton: {
    position: 'absolute',
    bottom: 1,
    paddingBottom: 3 * vh,
    paddingLeft: 48 * vh,
  },

  buttonStyle: {
    paddingVertical: 3 * vh,
    paddingHorizontal: 5 * vw,
    borderRadius: 10 * vw,
  },

  tabPlusButton: {
    position: 'absolute',
    bottom: 2 * vh,
    alignSelf: 'flex-end',
    paddingRight: 2 * vw
  },

  buttonStyle: {
    paddingVertical: 2.4 * vh,
    paddingHorizontal: 4 * vw,
    borderRadius: 10 * vw,
  },

  modalViewStyle: {
    justifyContent: 'center',
    padding: 4 * vh,
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 5 * vw,
    paddingBottom: 2 * vh,
  },

  modalInputStyle: {
    color: 'black',
    backgroundColor: '#fdce84',
    borderRadius: 2 * vw,
    paddingHorizontal: 3 * vw,
  },

  modalSubmitButton: {
    backgroundColor: '#fb4444',
    padding: 2 * vh,
    margin: 2 * vh,
    marginHorizontal: 20 * vw,
    borderRadius: 3 * vw,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalSubmitTextStyle: {
    color: '#fff',
  },

  noTasksView: {
    backgroundColor: '#fdce84',
    padding: 4 * vh,
    margin: 2 * vh,
    borderRadius: 3 * vh,
  },

  noTasksTextStyle: {},

  rowView: {
    width: 58 * vw,
  },
});
