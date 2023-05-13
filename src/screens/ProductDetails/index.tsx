import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { CommonStyles } from '../../theme';
import { Text } from 'react-native-paper';
import styles from './styles';
import { Images } from '../../assets';
import { Loader, RoundedButton, RemoteImage } from '../../components';
import { useRoute } from '@react-navigation/native';
import { useProductDetail } from './Hooks';
import { ErrorText, ProductDetailsText } from '../../strings';

const ProductDetailPage = () => {
  const { params } = useRoute<IProductDetailRouteProp>();
  const { product, isLoading, isInCart, error, fetchProduct, onButtonPressed } =
    useProductDetail();

  useEffect(() => {
    fetchProduct(params?.id);
  }, [params, params?.id]);

  if (isLoading) {
    return (
      <View style={[CommonStyles.flex, styles.container]}>
        <Loader animating={isLoading} />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={[
          CommonStyles.flex,
          styles.container,
          CommonStyles.centerContent,
        ]}>
        <Text>{ErrorText.errorFetchingProductDetail}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={[CommonStyles.flex, styles.container]}>
      <RemoteImage
        source={{ uri: product?.images[0] ?? '' }}
        defaultSource={Images.placeholderImage}
        resizeMode="contain"
        style={styles.productImage}
        size={25}
      />

      <Text variant="headlineMedium" style={styles.productName}>
        {product?.title ?? 'N/A'}
      </Text>
      <Text variant="bodyLarge" style={styles.productPrice}>
        {product?.description ?? 'N/A'}
      </Text>
      <Text variant="bodyLarge" style={styles.productPrice}>
        ${ProductDetailsText.price}: {product?.price ?? 'N/A'}
      </Text>

      <RoundedButton
        label={
          isInCart
            ? ProductDetailsText.removeFromCart
            : ProductDetailsText.addToCart
        }
        onPress={() => onButtonPressed(product)}
        style={styles.addToCartButton}
      />
      {isLoading && <Loader animating={isLoading} />}
    </ScrollView>
  );
};

export default React.memo(ProductDetailPage);
