import { StyleSheet } from 'react-native';
import { Alignment, Colors } from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.bgPrimary,
  },
  searchContainer: {
    ...Alignment.PHmedium,
    ...Alignment.PVsmall,
    backgroundColor: Colors.borderGreen,
  },
  searchInnerContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    ...Alignment.PHxSmall,
  },
  searchField: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    ...Alignment.PHxSmall,
    ...Alignment.PVmedium,
    borderRadius: 5,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
  },
  listContainer: {
    ...Alignment.PHmedium,
    alignItems: 'center',
  },
  listItem: {
    ...Alignment.MVsmall,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...Alignment.MVsmall,
    ...Alignment.MHmedium,
  },
});
