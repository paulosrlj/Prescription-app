import styled from 'styled-components/native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  margin-bottom: 22px;
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.primary};
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

export const Logo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const LogoText = styled.Text`
  margin-left: 4px;
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ContentView = styled.View`
  display: flex;
  align-items: center;

  margin: 10px 0;
  padding: 10px;
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

export const Paragraph = styled.Text`
  margin-bottom: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text_black};
  text-align: center;
`;

export const SignForm = styled.View`
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
  color: ${({ theme }) => theme.colors.text_black};
  background-color: transparent;
`;

export const InputIcon = styled(FontAwesome5)`
  margin: 0 8px;
`;

export const Button = styled.TouchableOpacity`
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

export const Link = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;
