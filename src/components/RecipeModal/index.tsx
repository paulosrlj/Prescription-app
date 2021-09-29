import React, { useContext } from 'react';
import { Modal, Pressable } from 'react-native';

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

import MedicineItem from '../MedicineItem';

export default function RecipeModal(): JSX.Element {
  const { isActive, setIsActive } = useContext(Context);
  const { recipeProps } = useContext(Context);

  return (
    <Modal
      animationType="slide"
      transparent
      visible={isActive}
      onRequestClose={() => {
        setIsActive(!isActive);
      }}
    >
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
