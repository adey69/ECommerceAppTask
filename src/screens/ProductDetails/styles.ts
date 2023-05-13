import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.bgPrimary,
    ...Alignment.PxLarge,
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  productName: {
    ...Alignment.MTlarge,
  },
  productPrice: {
    ...Alignment.MTmedium,
  },
  addToCartButton: {
    ...Alignment.MTsmall,
  },
});
