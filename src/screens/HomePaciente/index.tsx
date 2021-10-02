import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
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

// export interface DataListProps {
//   id: string;
//   illness_name: string;
//   due: boolean;
//   validade: Date;
//   medicineList: MedicineProps[];
//   doctor: DoctorType;
// }

export interface Data {
  data: RecipeType;
}

export default function HomePaciente(): JSX.Element {
  // const data: DataListProps[] = [
  //   {
  //     id: '1',
  //     illnessName: 'Gastrite',
  //     responsibleDoctor: 'Julia Mesquita',
  //     vality: '10/05/2022',
  //     medicineList: [
  //       {
  //         id: '102030',
  //         medicineName: 'Sorrizal',
  //         dosage: '1/2 comprimido a cada 6 horas',
  //         createdDate: '04/07/2020 - 19:05:33',
  //         vality: '01/05/2022',
  //       },
  //     ],
  //   },
  //   {
  //     id: '2',
  //     illnessName: 'Acne',
  //     responsibleDoctor: 'Paulo Sérgio',
  //     vality: '11/08/2023',
  //     medicineList: [
  //       {
  //         id: '295120',
  //         medicineName: 'Roacutam',
  //         dosage: '1 comprimido após o almoço',
  //         createdDate: '04/07/2020 - 19:05:33',
  //         vality: '01/05/2023',
  //       },
  //       {
  //         id: '217519',
  //         medicineName: 'Remédio aleatório pra alergia',
  //         dosage: '1 comprimido a cada 12 horas',
  //         createdDate: '04/07/2020 - 19:05:33',
  //         vality: '01/05/2023',
  //       },
  //     ],
  //   },
  //   {
  //     id: '3',
  //     illnessName: 'Bronquite',
  //     responsibleDoctor: 'João Sérgio',
  //     vality: '10/05/2024',
  //     medicineList: [
  //       {
  //         id: '2852195',
  //         medicineName: 'Bombinha',
  //         dosage: 'Tomar 20got de 8/8 horas',
  //         createdDate: '04/07/2020 - 19:05:33',
  //         vality: '01/05/2023',
  //       },
  //     ],
  //   },
  // ];

  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const { user } = useAuthContext();

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const { data } = (await api.get(
          `recipes/patient_recipes/${user?.cpf}`,
        )) as unknown as AxiosResponse<RecipeType[]>;

        setRecipes(data);
      } catch (err) {
        throw new Error(err);
      }
    }

    fetchRecipes();
  }, [user?.cpf]);

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
          <NoRecipesText>Não há receitas :)</NoRecipesText>
        </NoRecipesContainer>
      )}

      <RecipeModal />
    </Container>
  );
}
