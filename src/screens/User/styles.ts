import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const { height } = Dimensions.get('window');
const imageHeight = height * 0.4;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: imageHeight,
    backgroundColor: Colors.bgPrimary,
  },
  image: {
    width: imageHeight * 0.8,
    height: imageHeight * 0.8,
    borderRadius: (imageHeight * 0.8) / 2,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gender: {
    fontSize: 18,
    marginBottom: 10,
    textTransform: 'capitalize',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
});
