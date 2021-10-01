import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput, Animated } from 'react-native';

export const Container = styled(Animated.View)`
  width: 60px;
  height: 60px;
  background-color: #aaa;
  border-radius: 30px;
  margin: 20px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  margin-right: 60px;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BoxButtonSearch = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.secondary_blue};
  position: absolute;
  right: 0px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(MaterialCommunityIcons).attrs({
  name: 'google',
})`
  color: #fff;
  font-size: 25px;
`;
