import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { Dimensions, Platform, StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const DrugstoresMapBox = styled(MapView)`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height - 240}px;
  margin: ${Platform.OS === 'android'
      ? (StatusBar.currentHeight || 0) + 0
      : 0}px
    auto 0;
`;

export const DrugstoreInfo = styled.View``;
export const DrugstoreName = styled.Text``;
export const DrugstoresTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 27px;
  color: ${({ theme }) => theme.colors.text_black};

  margin-top: 20px;

  text-align: center;
`;
