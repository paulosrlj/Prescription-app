import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RecipeText } from '../MedicineItem/style';

export const Container = styled.TouchableHighlight`
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.secondary_blue};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;

  padding: 5px;

  margin-bottom: 10px;
`;

export const TextContainer = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.text_black};
  padding: 5px 0;
`;

export const Label = styled(RecipeText)`
  font-family: ${({ theme }) => theme.fonts.regular};
  padding: 5px 0;
`;

export const Negrito = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.text_black};
`;

export const Vality = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.text_black};
`;
