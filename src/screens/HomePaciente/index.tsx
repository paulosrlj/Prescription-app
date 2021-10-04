import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import AppLoading from 'expo-app-loading';
import RecipeCard from '../../components/RecipeCard';
import RecipeModal from '../../components/RecipeModal';

import {
  Container,
  RecipeTitle,
  RecipeList,
  NoRecipesText,
  NoRecipesContainer,
} from './styles';

import { useAuthContext } from '../../context/Authentication/AuthProvider';
import { RecipeType } from '../../context/Modal';

import api from '../../services/api';

export interface Data {
  data: RecipeType;
}

export default function HomePaciente(): JSX.Element {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const { user } = useAuthContext();

  const [isFetching, setIsFetching] = useState(false);

  async function fetchRecipes() {
    setIsFetching(!isFetching);

    try {
      const { data } = (await api.get(
        `recipes/patient_recipes/${user?.cpf}`,
      )) as unknown as AxiosResponse<RecipeType[]>;

      setRecipes(data);
      setIsFetching(false);
    } catch (err) {
      console.log(err);
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (isFetching) {
    return <AppLoading />;
  }

  return (
    <Container>
      <RecipeTitle>Suas receitas</RecipeTitle>

      {recipes.length > 0 ? (
        <RecipeList
          data={recipes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <RecipeCard data={item} />}
        />
      ) : (
        <NoRecipesContainer>
          <NoRecipesText>Não há receitas 😓</NoRecipesText>
        </NoRecipesContainer>
      )}

      <RecipeModal />
    </Container>
  );
}
