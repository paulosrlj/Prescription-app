import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';
import { RecipeText } from '../MedicineItem/style';

export const Container = styled.TouchableHighlight`
  height: 185px;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.secondary_blue};

  flex-direction: row;
  align-items: center;

  padding: 5px;

  margin-bottom: 10px;
`;

export const Icon = styled(Entypo)`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${RFValue(50)}px;
`;

export const TextContainer = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 27px;
  color: ${({ theme }) => theme.colors.text_black};
`;

export const Label = styled(RecipeText)`
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 5px;
`;

export const Negrito = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text_black};
`;

export const Vality = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text_black};
`;
