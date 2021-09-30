import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { Platform, StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  /* height: ${RFPercentage(42)}px; */
  height: 170px;

  /* background-color: ${({ theme }) => theme.colors.primary}; */

  margin-bottom: 22px;
`;

export const PatientCard = styled.View`
  width: ${RFPercentage(52)}px;
  height: 100%;
  margin: ${Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0}px auto
    0;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.secondary_blue};
`;

export const PatientCardName = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.bold};
  width: 60%;

  margin-left: 19px;
  margin-top: 15px;
`;

export const PatientCardCpf = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 12px;
  width: 60%;

  margin-top: 20px;
  margin-left: 19px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Logo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-top: 65px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(24)}px;
`;

export const LogoText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;

  margin-left: 4px;
`;

export const Title = styled(Text)`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.text_black};

  text-align: center;

  margin-top: 50px;
`;

export const InfoBox = styled.View`
  width: 100%;
  height: 200px;

  margin-top: 10px;

  flex-direction: row;
  justify-content: space-around;
`;

export const Divider = styled.View`
  align-items: center;
  justify-content: center;
`;

export const InfoLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text_black};

  padding: 5px 0;
`;

export const InfoText = styled(InfoLabel)`
  color: ${({ theme }) => theme.colors.info};
`;

export const CopyIdButton = styled.Pressable`
  width: 90%;
  height: 37px;
  margin: 5px auto;

  border-radius: 10px;
  padding: 7px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`;

export const ButtonText = styled(Text)`
  font-size: 14px;
  text-align: center;
`;

export const LogoutButton = styled(CopyIdButton)`
  background-color: ${({ theme }) => theme.colors.attention};
`;
