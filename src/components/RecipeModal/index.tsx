import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  Alert,
  Pressable,
  StyleSheet,
} from 'react-native';

import { TouchableHighlight } from 'react-native-gesture-handler';
import {
  Icon,
  MedicineList,
  ModalBox,
  ModalContainer,
  ModalTitle,
  PatientName,
  ResponsibleDoctor,
} from './styles';

import { Context } from '../../context/Modal';

import MedicineItem, { MedicineProps } from '../MedicineItem';

// import { Container } from './styles';

// export interface DataListProps extends MedicineProps {
//   id: string;
// }

// export interface ModalProps {
//   illnessName: string;
//   responsibleDoctor: string;
// }

// export interface Props {
//   data: ModalProps;
// }

export default function RecipeModal(): JSX.Element {
  const { isActive, setIsActive } = useContext(Context);
  const { recipeProps, setRecipeProps } = useContext(Context);

  // const recipesData: DataListProps[] = [
  //   {
  //     id: '1',
  //     medicineName: 'Metamizol',
  //     dosage: 'Tomar 20 got de 8/8 horas',
  //     createdDate: '04/07/2020 - 17:33:20',
  //     vality: '20/03/2022',
  //   },
  //   {
  //     id: '2',
  //     medicineName: 'Leuvofloxacino',
  //     dosage: 'Tomar 1 comprimido a cada 24H',
  //     createdDate: '03/07/2020 - 17:33:20',
  //     vality: '20/03/2025',
  //   },
  //   {
  //     id: '3',
  //     medicineName: 'Roacutam',
  //     dosage: '1 comprimido após o almoço',
  //     createdDate: '04/07/2020 - 17:33:20',
  //     vality: '20/03/2022',
  //   },
  // ];

  return (
    <Modal
      animationType="slide"
      transparent
      visible={isActive}
      onRequestClose={() => {
        setIsActive(!isActive);
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
          <Pressable onPress={() => setIsActive(!isActive)}>
            <Icon name="window-close" />
          </Pressable>
          <ModalTitle>{recipeProps.illnessName}</ModalTitle>
          <ResponsibleDoctor>Médico responsável:</ResponsibleDoctor>
          <PatientName>{recipeProps.responsibleDoctor}</PatientName>

          <MedicineList
            keyExtractor={item => item.id}
            renderItem={({ item }) => <MedicineItem data={item} />}
            data={recipeProps.medicineList}
          />
        </ModalBox>
      </ModalContainer>
    </Modal>
  );
}
