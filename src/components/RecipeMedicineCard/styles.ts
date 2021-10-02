import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
`;

export const MedicineInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const MedicineName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(17)}px;
`;
export const MedicineDosage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(17)}px;
`;

export const DeleteMedicineButton = styled.Pressable`
  margin-top: 5px;
`;

export const DeleteMedicineIcon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(20)}px;
`;
