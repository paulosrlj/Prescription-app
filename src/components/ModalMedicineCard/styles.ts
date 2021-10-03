import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
`;

export const MedicineIcon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(30)}px;
  margin-right: 10px;
`;
export const MedicineInfoBox = styled.View``;
export const MedicineName = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const MedicineClass = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
