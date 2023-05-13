import React from 'react';
import { View, Text, Image } from 'react-native';
import { useAppSelector } from '../../redux/hooks';
import { authSelector } from '../../redux/selectors';
import styles from './styles';
import { UserDetailsText } from '../../strings';

const UserDetailsPage = () => {
  const { user } = useAppSelector(authSelector);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: user?.image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>
          {UserDetailsText.fullname}: {user?.firstName} {user?.lastName}
        </Text>
        <Text style={styles.gender}>
          {UserDetailsText.gender}: {user?.gender}
        </Text>
        <Text style={styles.email}>
          {UserDetailsText.email}: {user?.email}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(UserDetailsPage);
