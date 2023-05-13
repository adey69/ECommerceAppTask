import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { logout } from '../../../redux/slices/authSlice';

export default () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const onLogoutPressed = useCallback(() => {
    dispatch(logout());
  }, []);

  const onCartPressed = useCallback(() => {
    navigation.navigate('Cart');
  }, []);

  return {
    onLogoutPressed,
    onCartPressed,
  };
};
