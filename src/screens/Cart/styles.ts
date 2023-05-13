import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.bgPrimary,
    ...Alignment.PTlarge,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    ...Alignment.PVmedium,
    ...Alignment.PHmedium,
  },
  itemSeparator: {
    ...Alignment.MVxSmall,
  },
});
