import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  animationStyle: {
    height: 50 * vh,
    alignSelf: 'center',
  },

  headingStyleView: {
    paddingTop: 5 * vh,
  },

  headingTextStyle: {
    fontSize: 4 * vh,
    alignSelf: 'center',
  },

  iconPStyle: {
    height: 30,
    width: 20,
  },

  tagLineStyleView: {},

  tagLineStyle: {
    fontSize: 3.5 * vh,
    alignSelf: 'center',
    letterSpacing: 0.5 * vw,
  },

  tagLineStyle2: {
    fontSize: 3.5 * vh,
    alignSelf: 'center',
    letterSpacing: 0.5 * vw,
    bottom: 1.5 * vh,
  },

  subTagLineView: {},

  subTagLineStyle: {
    color: '#96959e',
    alignSelf: 'center',
  },

  startButton: {
    marginTop: 2 * vh,
    paddingVertical: 2.5 * vh,
    marginHorizontal: 30 * vw,
    justifyContent: 'center',
  },

  startButtonTextStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 2 * vh,
    letterSpacing: 0.2 * vw,
  },

  linearButton: {
    borderRadius: 6 * vw,
    paddingVertical: 1 * vh,
  },

  mainScreenStyle: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
