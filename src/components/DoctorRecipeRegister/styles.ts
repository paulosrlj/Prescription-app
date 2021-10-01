import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { IRecipeMedicinesListProps } from '.';

export const Container = styled.View`
  flex: 1;

  margin: 0px 20px;
`;

export const RegisterRecipeTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 27px;
  color: ${({ theme }) => theme.colors.text_black};

  margin-top: 40px;
  margin-bottom: 30px;

  text-align: center;
`;

export const CPFPatientInput = styled.TextInput`
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const AddMedicineButton = styled.Pressable`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 37px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 20px 0;
`;
export const AddMedicineButtonLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 17px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const MedicinesList = styled(
  FlatList as new () => FlatList<IRecipeMedicinesListProps>,
).attrs({
  showsVerticalScrollIndicator: false,
})`
  max-height: 200px;
  border: 1px solid transparent;
`;

export const DoneRecipeButton = styled.Pressable`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 37px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 20px 0;
`;
export const DoneRecipeButtonLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 17px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
