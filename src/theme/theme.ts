import { useTheme } from 'react-native-paper';
import Colors from './Colors';

export default () => {
  const theme = useTheme();

  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: Colors.black,
    },
  };

  return {
    customTheme,
  };
};
