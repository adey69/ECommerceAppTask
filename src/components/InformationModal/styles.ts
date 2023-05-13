import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { COLORS, Metrics } from '../../Themes';

const useStyle = () => {
  const { colors } = useTheme() as ITheme;
  return StyleSheet.create({
    container: {
      borderRadius: 5,
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: COLORS.backgroundWhite,
      marginHorizontal: 15,
    },
    modalPosition: {
      position: 'absolute',
      left: -32,
      right: -32,
      top: -32,
      bottom: -32,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000B3',
      elevation: 24,
    },
    modalContainer: {
      width: 335,
      paddingVertical: 10,
      backgroundColor: '#FFF',
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 12,
    },
    heading: {
      textAlign: 'center',
      marginBottom: 5,
    },
    message: {
      color: COLORS.grey,
    },
    inputFieldContainer: {
      borderWidth: 0.5,
      borderColor: COLORS.grey,
      borderRadius: 5,
      paddingHorizontal: 5,
      paddingVertical: 10,
      marginVertical: 15,
    },
    buttonContainer: {
      justifyContent: 'flex-end',
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      backgroundColor: COLORS.bloodOrange,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: COLORS.backgroundWhite,
      fontSize: 18,
    },
  });
};
export default useStyle;
