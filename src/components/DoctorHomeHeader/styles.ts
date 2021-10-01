import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  max-height: 180px;
`;

export const HeaderGradient = styled(LinearGradient)`
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  margin: ${Platform.OS === 'android'
    ? (StatusBar.currentHeight || 0) + 0
    : 0}px
    auto 0;
  padding: 30px 20px;
`;

export const DoctorInfo = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
`;
export const DoctorName = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const DoctorCRM = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const DoctorLabel = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const DoctorImg = styled.Image`
  width: 110px;
  height: 110px;
`;
