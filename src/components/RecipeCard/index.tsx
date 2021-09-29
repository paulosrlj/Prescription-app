import React, { useContext } from 'react';

import { Container, Title, Icon, Vality, TextContainer } from './styles';

import { Context } from '../../context/Modal';

import { Data } from '../../screens/HomePaciente';

export default function RecipeCard({ data }: Data): JSX.Element {
  const { isActive, setIsActive } = useContext(Context);
  const { recipeProps, setRecipeProps } = useContext(Context);

  function toggleModal() {
    setIsActive(!isActive);
    setRecipeProps(data);
  }

  return (
    <Container
      underlayColor="rgba(214, 210, 210, 0.4)"
      onPress={() => toggleModal()}
    >
      <>
        <Icon name="text-document" />
        <TextContainer>
          <Title>{data.illnessName}</Title>
          <Vality>Valido até: {data.vality}</Vality>
        </TextContainer>
      </>
    </Container>
  );
}
