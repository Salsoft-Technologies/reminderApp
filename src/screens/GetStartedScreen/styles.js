import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  mainScreen: {
    flex: 1,
    padding: 4 * vh,
    paddingTop: 8 * vh,
  },

  headingTextView: {
    paddingTop: 3 * vh,
  },

  headingAlwaysText: {
    color: 'white',
    fontSize: 3.5 * vh,
    letterSpacing: 3,
  },

  signUpButton: {
    backgroundColor: '#fb4444',
    borderRadius: 10 * vw,
    paddingVertical: 2.5 * vh,
    marginHorizontal: 8 * vw,
  },

  signUpButtonText: {
    alignSelf: 'center',
    color: 'white',
  },

  signInButtonText: {
    alignSelf: 'center',
    color: '#fb4444',
    fontWeight: 'bold',
  },

  signInButton: {
    marginTop: 2 * vh,
    backgroundColor: '#ffffff',
    borderRadius: 10 * vw,
    paddingVertical: 2.5 * vh,
    marginHorizontal: 8 * vw,
  },

  mainAccessButtonsView: {
    paddingTop: 40 * vh,
  },

  logoIconStyle: {
    height: 7.5 * vh,
    width: 15 * vw,
  },
});
