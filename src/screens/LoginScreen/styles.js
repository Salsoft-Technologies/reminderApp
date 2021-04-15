import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  mainScreenStyle: {
    backgroundColor: 'black',
    flex: 1,
    padding: 2 * vh,
  },

  emailTextStyle: {
    color: 'white',
    marginLeft: 2 * vw,
    marginBottom: 1 * vh,
  },

  passwordTextStyle: {
    paddingTop: 2 * vh,
    color: 'white',
    marginLeft: 2 * vw,
    marginBottom: 1 * vh,
  },

  textFieldsView: {
    paddingTop: 2 * vh,
  },

  textFields: {
    borderRadius: 3 * vw,
    borderColor: '#fb4444',
    borderWidth: 2,
    paddingLeft: 3 * vw,
    color: 'white',
    paddingVertical: 2 * vh,
  },

  textEmptyFields: {
    borderRadius: 3 * vw,
    borderColor: '#222222',
    borderWidth: 2,
    paddingLeft: 3 * vw,
    color: 'white',
    paddingVertical: 2 * vh,
  },

  submitLoginView: {
    marginTop: 5 * vh,
    backgroundColor: '#fb4444',
    borderRadius: 4 * vw,
    paddingVertical: 2.5 * vh,
  },

  loginSubmitText: {
    alignSelf: 'center',
    color: 'white',
  },

  noAccountView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 3 * vh,
  },

  noAccountText: {
    color: 'gray',
  },

  createHereText: {
    color: '#fff',
  },

  animationStyle: {
    height: 20 * vh,
    alignSelf: 'center',
    paddingTop: 1 * vh,
  },
});
