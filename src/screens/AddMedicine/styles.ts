import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions, FlatList } from 'react-native';
import { IRecipeMedicinesListProps } from '../../components/DoctorRecipeRegister';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ScreenTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(27)}px;
  color: ${({ theme }) => theme.colors.text_black};

  margin-top: 10px;
  margin-bottom: 30px;

  text-align: center;
`;
export const SearchMedicineBox = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin: 0px 20px;
  padding: 5px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SearchMedicineInput = styled.TextInput`
  width: 90%;
  padding: 5px 10px;
`;

export const SearchMedicineButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 10%;
  height: 100%;
`;

export const SearchMedicineIcon = styled(FontAwesome)`
  font-size: ${RFValue(20)}px;
`;
export const DosageBox = styled.View`
  margin: 20px 0px;
`;
export const DosageLabel = styled.Text`
  text-align: center;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const DosageInput = styled.TextInput`
  margin: 20px;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const AddDosageButton = styled.Pressable`
  margin: 0px 20px;
  padding: 8px 0px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
`;
export const AddDosageButtonLabel = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const MedicinesList = styled(
  FlatList as new () => FlatList<IRecipeMedicinesListProps>,
).attrs({
  showsVerticalScrollIndicator: false,
})`
  max-height: ${Math.floor(Dimensions.get('window').height / 4)}px;
  border: 1px solid transparent;
`;
