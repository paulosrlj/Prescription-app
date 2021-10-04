import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

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

export const AddExamBox = styled.View`
  display: flex;
  justify-content: space-between;
  height: 90%;
  padding: 0px 20px;
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

export const AddExamButton = styled.Pressable`
  background: ${({ theme }) => theme.colors.primary};
  padding: 8px 0px;
  border-radius: 10px;
`;
export const AddExamButtonLabel = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const ExamsList = styled.View``;
