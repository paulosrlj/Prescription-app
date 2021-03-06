import { FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Form = styled.View`
  padding: 15px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 0px 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background_input};
`;

export const FontAwesomeIcon = styled(FontAwesome5)`
  text-align: center;
  min-width: 10%;
`;

export const Button = styled.Pressable`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ValidationText = styled.Text`
  color: ${({ theme }) => theme.colors.attention};
  padding: 0 5px 5px 5px;
  font-size: ${RFValue(15)}px;
`;
