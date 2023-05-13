import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';

export default StyleSheet.create({
  container: {
    ...Alignment.Psmall,
    ...Alignment.PBxLarge,
    backgroundColor: Colors.white,
    borderRadius: 5,
    minHeight: 220,
  },
  productImage: {
    width: 150,
    height: 100,
  },
  productName: {
    ...Alignment.MTmedium,
  },
  productPrice: {
    ...Alignment.MTsmall,
    fontWeight: '700',
    fontSize: 16,
  },
  detailContainer: {
    maxWidth: 150,
  },
});
