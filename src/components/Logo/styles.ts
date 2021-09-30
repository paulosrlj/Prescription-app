import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const AppLogo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const LogoView = styled.View`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(65)}px;
`;

export const LogoText = styled.Text`
  margin-left: 4px;
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`;
