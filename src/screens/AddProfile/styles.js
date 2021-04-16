import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  mainScreenView: {
    flex: 1,
    backgroundColor: 'black',
    padding: 2 * vh,
  },

  textInputBox: {
    borderBottomWidth: 0.2 * vw,
    borderColor: 'white',
    padding: 5 * vw,
    marginHorizontal: 3 * vw,
  },

  avatarStyle: {
    alignSelf: 'center',
    height: 30 * vh,
  },

  submitLoginView: {
    marginTop: 5 * vh,
    backgroundColor: '#fb4444',
    borderRadius: 4 * vw,
    paddingVertical: 2.5 * vh,
    marginHorizontal: 5 * vw,
  },

  loginSubmitText: {
    alignSelf: 'center',
    color: 'white',
  },

  modalViewStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 2 * vw,
  },

  successModal: {
    backgroundColor: '#47c75e',
    padding: 5 * vw,
    borderTopLeftRadius: 2 * vw,
    borderBottomLeftRadius: 2 * vw,
  },

  iconStyle: {
    height: 5 * vh,
  },

  messageView: {
    justifyContent: 'center',
    paddingLeft: 2 * vw,
  },

  successStyle: {
    color: '#3b424a',
    fontSize: 2.5 * vh,
  },

  messageStyle: {
    alignItems: 'center',
    color: 'gray',
  },
});
