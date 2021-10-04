import React, { useContext, useState } from 'react';
import { Modal, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  Icon,
  ModalBox,
  ModalContainer,
  AddExamBox,
  ScreenTitle,
  AddExamButton,
  AddExamButtonLabel,
  ExamsList,
} from './styles';

import { Context } from '../../../../context/AddExamModal';

import api from '../../../../services/api';

export default function AddExamModal(): JSX.Element {
  const { isActive, setIsActive } = useContext(Context);

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
          <AddExamBox>
            <ScreenTitle>Adicionar exames</ScreenTitle>
            <ExamsList>{/* map com as fotos dos exames */}</ExamsList>
            <AddExamButton>
              <AddExamButtonLabel>Adicionar exame</AddExamButtonLabel>
            </AddExamButton>
          </AddExamBox>
        </ModalBox>
      </ModalContainer>
    </Modal>
  );
}
