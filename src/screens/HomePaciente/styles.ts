import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { FlatList } from 'react-native';
import { DataListProps } from '.';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  /* height: ${RFPercentage(42)}px; */
  height: 150px;

  background-color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 22px;
`;

export const PatientCard = styled.View`
  width: ${RFPercentage(52)}px;
  height: 100%;
  margin: 50px auto 0;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.secondary_blue};
`;

export const PatientCardName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  /* font-size: ${RFPercentage(3)}px; */
  font-size: 12px;
  width: 60%;

  margin-left: 19px;
  margin-top: 15px;

  color: ${({ theme }) => theme.colors.text};
`;

export const PatientCardCpf = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 12px;
  width: 60%;

  margin-top: 20px;
  margin-left: 19px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Logo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-top: 30px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(24)}px;
`;

export const LogoText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};

  margin-left: 4px;
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
  FlatList as new () => FlatList<DataListProps>,
).attrs({
  showsVerticalScrollIndicator: false,
})``;
