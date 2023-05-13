import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import useStyle from './styles';
import { Text } from 'react-native-paper';

interface IInformationModalProps {
  isVisible: boolean;
  setIsModalVisible: (val: boolean) => void;
  title?: string;
  message?: string;
}

const InformationModal = (props: IInformationModalProps) => {
  const styles = useStyle();

  const { isVisible, setIsModalVisible, message, title } = props;

  return (
    <Modal
      isVisible={isVisible}
      hasBackdrop={true}
      backdropOpacity={0.7}
      onBackdropPress={() => setIsModalVisible(false)}>
      <View style={styles.container}>
        <Text variant="bodyLarge" style={styles.heading}>
          {title}
        </Text>
        <Text variant="bodyMedium" style={styles.message}>
          {message}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setIsModalVisible(false);
            }}>
            <Text variant="bodyMedium" style={styles.buttonText}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(InformationModal);
