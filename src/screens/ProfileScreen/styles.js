import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  mainScreenView: {
    flex: 1,
    backgroundColor: 'black',
    padding: 2 * vh,
  },

  rotateView: {
    backgroundColor: '#fb4050',
    paddingVertical: 6 * vh,
    paddingHorizontal: 35 * vh,
    marginTop: 8 * vh,
    transform: [{rotate: '340deg'}],
    opacity: 0.4,
  },

  profileDisclaimerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileDisclaimer: {
    color: '#fff',
    fontSize: 2 * vh,
  },

  loginSubmitText: {
    alignSelf: 'center',
    color: 'white',
  },

  submitLoginView: {
    backgroundColor: '#fb4444',
    borderRadius: 4 * vw,
    paddingVertical: 2.5 * vh,
    marginHorizontal: 5 * vw,
    bottom: 3 * vh,
  },

  avatarStyle: {
    alignSelf: 'center',
    height: 28 * vh,
    position: 'relative',
    bottom: 7 * vh,
  },

  detailsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    bottom: 15 * vh,
  },

  detailsStyleHeading: {
    color: '#a4a5a8',
    fontSize: 2 * vh,
  },

  detailsStyleText: {
    color: '#fff',
    alignSelf: 'center',
    paddingTop: 0.5 * vh,
  },

  otherDetailsStyleView: {
    backgroundColor: '#fdce84',
    paddingHorizontal: 5 * vw,
    paddingVertical: 1 * vh,
    borderRadius: 1 * vh,
    marginTop: 1 * vh,
  },

  valueHeadingStyle: {
    color: '#a4a5a8',
  },

  valueStyle: {
    fontSize: 2 * vh,
  },

  otherDetailsMainView: {
    bottom: 12 * vh,
    height: 40 * vh,
  },

  inviteButton: {
    alignItems: 'flex-end',
    paddingTop: 3 * vh,
  },

  inviteText: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
