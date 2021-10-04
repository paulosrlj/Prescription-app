import styled from 'styled-components/native';
import { FlatList, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { IRecipeMedicinesListProps } from '.';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: 0px 20px;
`;

export const RegisterRecipeTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(27)}px;
  color: ${({ theme }) => theme.colors.text_black};

  margin: 10px 0px;

  text-align: center;
`;

export const RecipeInfoInput = styled.TextInput`
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;
export const AddMedicineButton = styled.Pressable`
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  padding: 5px 0px;
`;
export const AddMedicineButtonLabel = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const MedicinesList = styled(
  FlatList as new () => FlatList<IRecipeMedicinesListProps>,
).attrs({
  showsVerticalScrollIndicator: false,
})`
  min-height: ${Math.floor(Dimensions.get('window').height / 5)}px;
  max-height: ${Math.floor(Dimensions.get('window').height / 5)}px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const EmptyMedicinesList = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${Math.floor(Dimensions.get('window').height / 5)}px;
  max-height: ${Math.floor(Dimensions.get('window').height / 5)}px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const EmptyMedicinesListLabel = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const DoneRecipeButton = styled.Pressable`
  border-radius: 10px;
  max-height: 37px;
  margin-bottom: 20px;
  padding: 5px 0px;
  background: ${({ theme }) => theme.colors.primary};
`;

export const DoneRecipeButtonLabel = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
