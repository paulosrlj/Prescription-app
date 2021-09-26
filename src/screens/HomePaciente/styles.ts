import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  /* height: ${RFPercentage(42)}px; */
  height: 184px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const PatientCard = styled.View`
  width: ${RFPercentage(52)}px;
  height: 100%;
  margin: 82px auto;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.secondary_blue};
`;

export const PatientCardName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFPercentage(3)}px;

  width: 60%;

  margin-left: 19px;
  margin-top: 23px;

  color: ${({ theme }) => theme.colors.background};
`;

export const Logo = styled(MaterialCommunityIcons)``;
export const LogoText = styled.Text``;
