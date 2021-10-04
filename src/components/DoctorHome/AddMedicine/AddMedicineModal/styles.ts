import styled from 'styled-components/native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions, FlatList } from 'react-native';
import { MedicineType } from '../../../../util/types';

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
  font-size: ${RFValue(35)}px;

  align-self: flex-end;
`;

export const ScreenTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(27)}px;
  color: ${({ theme }) => theme.colors.text_black};

  margin-top: 10px;
  margin-bottom: 20px;

  text-align: center;
`;
export const SearchMedicineBox = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin: 0px 0px;
  padding: 5px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SearchMedicineInput = styled.TextInput`
  width: 80%;
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

export const ClearFiltersButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 10%;
  height: 100%;
`;

export const ClearFiltersIcon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(23)}px;
`;

export const SearchMedicineIcon = styled(FontAwesome)`
  font-size: ${RFValue(20)}px;
`;

export const AddModalMedicineBox = styled.View`
  margin: 20px;
`;

export const DosageBox = styled.View`
  margin-bottom: 10px;
`;

export const DosageLabel = styled.Text`
  text-align: center;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const DosageInput = styled.TextInput`
  margin: 20px 0px;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const AddDosageButton = styled.Pressable`
  /* margin: 0px 20px; */
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

export const CancelAddMedicineButton = styled.Pressable`
  background: ${({ theme }) => theme.colors.attention};
  padding: 8px 0px;
  border-radius: 10px;
`;

export const CancelAddMedicineButtonLabel = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const MedicinesList = styled(
  FlatList as new () => FlatList<MedicineType>,
).attrs({
  showsVerticalScrollIndicator: false,
})`
  min-height: ${Math.floor(Dimensions.get('window').height / 2)}px;
  margin: 10px 0px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
