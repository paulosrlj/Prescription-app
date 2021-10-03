import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput, Animated } from 'react-native';

export const Container = styled(Animated.View)`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const Input = styled(TextInput)`
  flex: 1;
  margin-right: 60px;
  margin-left: 20px;
`;

export const BoxButtonSearch = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  position: absolute;
  right: 0px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(AntDesign).attrs({
  name: 'search1',
})`
  color: ${({ theme }) => theme.colors.text_black};
  font-size: 25px;
`;
