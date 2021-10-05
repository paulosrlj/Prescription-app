import styled from 'styled-components/native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Content = styled.View`
  padding: 0 10px;
`;

export const ContentView = styled.View`
  display: flex;
  align-items: center;

  margin: 0 0 10px;
  padding: 0 26px;
`;

export const Title = styled.Text`
  margin-bottom: 10px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text_black};
`;

export const LightParagraph = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.paragraph};
  text-align: center;
`;

export const Form = styled.View`
  padding: 8px 25px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 0px 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background_input};
`;

export const FontAwesomeIcon = styled(FontAwesome5)`
  margin: 0 8px;
`;

export const MaterialIcon = styled(MaterialIcons)`
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

export const BirtDateView = styled.View`
  padding: 3px 3px;
  min-height: ${RFValue(38)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_black};
  background-color: transparent;
`;
