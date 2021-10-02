import React from 'react';

import { Dimensions, Animated } from 'react-native';
import { Container, Input, BoxButtonSearch, SearchIcon } from './styles';

export default function SearchBar(): JSX.Element {
  const animation = new Animated.Value(350);
  const { width } = Dimensions.get('window');

  return (
    <Container style={{ width: animation }}>
      <Input autoFocus placeholder="Digite algo..." />
      <BoxButtonSearch>
        <SearchIcon />
      </BoxButtonSearch>
    </Container>
  );
}
