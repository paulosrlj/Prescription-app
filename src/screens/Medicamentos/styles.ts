import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { MedicineProps } from '../../components/MedicineItem';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const MedicamentoTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text_black};

  margin-top: 40px;
  margin-bottom: 20px;

  text-align: center;
`;
export const MedicamentoList = styled(
  FlatList as new () => FlatList<MedicineProps>,
).attrs({
  showsVerticalScrollIndicator: false,
})``;
