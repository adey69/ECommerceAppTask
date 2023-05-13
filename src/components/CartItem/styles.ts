import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';

export default StyleSheet.create({
  container: {
    ...Alignment.PVsmall,
    ...Alignment.PHmedium,
    backgroundColor: Colors.white,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  detailsContainer: {
    ...Alignment.MLsmall,
    justifyContent: 'center',
  },
  quantity: {
    fontWeight: '600',
    color: Colors.red,
  },
});
