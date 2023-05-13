import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    ...Alignment.PVmedium,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.yellowPrimary,
    borderColor: Colors.borderGreen,
  },
  label: {
    color: Colors.borderGreen,
    fontWeight: '600',
    fontSize: 16,
  },
});
