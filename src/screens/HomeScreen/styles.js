import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

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
    color: '#fff'
  },

  monthTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginVertical: 2 * vh,
    borderRadius: 2 * vh,
    paddingHorizontal: 2 * vw,
    backgroundColor: '#aaaaaa'
  },

  todaysTaskView: {
    paddingHorizontal: 4 * vw,
    paddingTop: 2 * vh
  },

  todaysTaskStyle: {
      fontSize: 2.5 * vh,
      fontWeight: 'bold',
      letterSpacing: 0.2 * vw
  },

  listElementView:{
    padding: 2.5 * vh,
    borderRadius: 5 * vw,
  },

  elementView: {
    padding: 0.5 * vh,
    paddingHorizontal: 2 * vw,
    width: 70 * vw,
    paddingTop: 1 * vh,
  },

  listElementStyle:{
    color: '#fff',
  },

  timeStyle:{
    color: 'darkgray',
    fontSize: 1.8 * vh,
    paddingTop: 0.5 * vh,
    fontWeight: 'bold'

  },

  footerButton: {
    position: 'absolute', 
    bottom: 1,
    paddingBottom: 3 * vh,
    paddingLeft: 48 * vh,


  },

  buttonStyle:{
    paddingVertical: 3 * vh,
    paddingHorizontal: 5 * vw,
    borderRadius: 10 * vw
  },

  tabPlusButton: {
    position: 'absolute',
    bottom: 2 * vh,
    paddingLeft: 50 * vh
  },

  buttonStyle: {
    paddingVertical: 2.4 * vh,
    paddingHorizontal: 4 * vw,
    borderRadius: 10 * vw,

  },

});
