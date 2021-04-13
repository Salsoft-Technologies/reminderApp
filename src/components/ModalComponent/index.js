import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';

function ModalComponent(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const renderModalMessage = () => {
    return (
      <Modal
        isVisible={props.theVisibility}
        onBackdropPress={toggleModal}
        backdropColor="black">
        <View>
          <Text></Text>
          <TouchableOpacity>
            <Text>{props.title}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return <View>{renderModalMessage()}</View>;
}

export default ModalComponent;
