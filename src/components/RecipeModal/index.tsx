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
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
