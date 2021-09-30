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

export const Input = styled.TextInput`
  padding: 3px 5px;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_black};
  background-color: transparent;
`;

export const FontAwesomeIcon = styled(FontAwesome5)`
  margin: 0 8px;
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
