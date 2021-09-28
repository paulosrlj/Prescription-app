import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';
import { Modal, Alert, View, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalBox = styled.View`
  width: 85%;
  height: 85%;

  border-radius: 5px;

  background-color: white;
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${RFValue(50)}px;

  align-self: flex-end;
`;

export const ModalTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text_black};

  text-align: center;

  margin: 5px 0 30px;
`;

export const ResponsibleDoctor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text_black};

  margin: 0 10px;
`;

export const PatientName = styled(ResponsibleDoctor)`
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 20px;
`;

export const MedicineList = styled(FlatList)``;
