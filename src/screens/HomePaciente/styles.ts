import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { FlatList } from 'react-native';
import { RecipeType } from '../../context/Modal';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const RecipeTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text_black};

  margin-top: 40px;
  margin-bottom: 20px;

  text-align: center;
`;

export const RecipeList = styled(
  FlatList as new () => FlatList<RecipeType>,
).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const NoRecipesContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NoRecipesText = styled.Text`
  font-size: 20px;
`;
