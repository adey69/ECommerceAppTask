import React from 'react';
import { View, TextInput } from 'react-native';
import { Alignment, Colors, CommonStyles } from '../../theme';
import { Text } from 'react-native-paper';
import styles from './styles';
import { ErrorText, LoginText } from '../../strings';
import { Loader, RoundedButton } from '../../components';
import { useLogin } from './Hooks';

const LoginPage = () => {
  const {
    username,
    password,
    usernameError,
    passwordError,
    isLoading,
    error,
    setUsername,
    setPassword,
    onLoginPressed,
  } = useLogin();

  return (
    <View style={[CommonStyles.flex, styles.container]}>
      <Text variant="titleMedium" style={styles.heading}>
        {LoginText.loginHere}
      </Text>
      <TextInput
        value={username}
        style={styles.inputField}
        placeholder={LoginText.username}
        placeholderTextColor={Colors.placeholderGrey}
        onChangeText={text => setUsername(text)}
      />
      {!!usernameError ? (
        <Text variant="bodyMedium" style={styles.errorText}>
          {usernameError}
        </Text>
      ) : null}

      <TextInput
        value={password}
        style={[styles.inputField, Alignment.MTmedium]}
        placeholder={LoginText.password}
        placeholderTextColor={Colors.placeholderGrey}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      {!!passwordError ? (
        <Text variant="bodyMedium" style={styles.errorText}>
          {passwordError}
        </Text>
      ) : null}
      {!!error ? (
        <Text variant="bodyMedium" style={styles.errorText}>
          {ErrorText.invalidCredentials}
        </Text>
      ) : null}
      <RoundedButton
        label={LoginText.login}
        onPress={onLoginPressed}
        style={styles.loginButton}
      />
      {isLoading && <Loader animating={isLoading} />}
    </View>
  );
};

export default React.memo(LoginPage);
