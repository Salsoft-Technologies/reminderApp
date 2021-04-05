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
    width: 60 * vw,
    borderRadius: 5 * vw,
    marginBottom: 2 * vh
  },

  listElementStyle:{
    color: '#fff',
    alignSelf: 'center'
  }

});
