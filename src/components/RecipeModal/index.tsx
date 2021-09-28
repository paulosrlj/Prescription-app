import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  Alert,
  Pressable,
  StyleSheet,
} from 'react-native';

import {
  Icon,
  ModalBox,
  ModalContainer,
  ModalTitle,
  PatientName,
  ResponsibleDoctor,
} from './styles';

import MedicineItem from '../MedicineItem';

// import { Container } from './styles';

export default function RecipeModal(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      {/* <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View> */}

      <ModalContainer>
        <ModalBox>
          <Icon name="window-close" />
          <ModalTitle>Receitas</ModalTitle>
          <ResponsibleDoctor>Médico responsável:</ResponsibleDoctor>
          <PatientName>Elise Von Karma</PatientName>

          {/* <MedicineList /> */}
          <MedicineItem />
        </ModalBox>
      </ModalContainer>
    </Modal>
  );
}
