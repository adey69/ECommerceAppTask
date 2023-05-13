import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';

export default StyleSheet.create({
  container: {
    ...Alignment.PHmedium,
    alignItems: 'center',
    paddingTop: 70,
    backgroundColor: Colors.bgPrimary,
  },
  heading: {
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputField: {
    width: '100%',
    borderWidth: 1,
    ...Alignment.PHsmall,
    ...Alignment.PVmedium,
    borderRadius: 5,
    borderColor: Colors.borderGreen,
    backgroundColor: Colors.white,
  },
  loginButton: {
    ...Alignment.MTlarge,
  },
  errorText: {
    color: Colors.red,
    ...Alignment.MVsmall,
  },
});
