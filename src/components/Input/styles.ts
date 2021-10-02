import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const InputText = styled.TextInput`
  padding: 3px 5px;
  min-height: ${RFValue(38)}px;
  width: 90%;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_black};
  background-color: transparent;
`;
