import React from 'react';

import { Container, Title, Icon, Vality, TextContainer } from './styles';

export interface RecipeCardProps {
  title: string;
  vality: string;
}

interface Props {
  data: RecipeCardProps;
}

export default function RecipeCard({ data }: Props): JSX.Element {
  return (
    <Container>
      <Icon name="text-document" />
      <TextContainer>
        <Title>{data.title}</Title>
        <Vality>Valido até: {data.vality}</Vality>
      </TextContainer>
    </Container>
  );
}
