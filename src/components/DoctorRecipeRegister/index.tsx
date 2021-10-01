import React from 'react';
import RecipeMedicineCard from '../RecipeMedicineCard';
import {
  Container,
  RegisterRecipeTitle,
  CPFPatientInput,
  AddMedicineButton,
  MedicinesList,
  DoneRecipeButton,
  AddMedicineButtonLabel,
  DoneRecipeButtonLabel,
} from './styles';

export interface IRecipeMedicinesListProps {
  id: string;
  medicineName: string;
  dosage: string;
  createdDate: string;
  vality: string;
}

const data: IRecipeMedicinesListProps[] = [
  {
    id: '295120',
    medicineName: 'Roacutam',
    dosage: '1 comprimido após o almoço',
    createdDate: '04/07/2020 - 19:05:33',
    vality: '01/05/2023',
  },
  {
    id: '217519',
    medicineName: 'Remédio aleatório pra alergia',
    dosage: '1 comprimido a cada 12 horas',
    createdDate: '04/07/2020 - 19:05:33',
    vality: '01/05/2023',
  },
  {
    id: '217518',
    medicineName: 'Remédio aleatório pra alergia',
    dosage: '1 comprimido a cada 12 horas',
    createdDate: '04/07/2020 - 19:05:33',
    vality: '01/05/2023',
  },
  {
    id: '217517',
    medicineName: 'Remédio aleatório pra alergia',
    dosage: '1 comprimido a cada 12 horas',
    createdDate: '04/07/2020 - 19:05:33',
    vality: '01/05/2023',
  },
  {
    id: '217516',
    medicineName: 'Remédio aleatório pra alergia',
    dosage: '1 comprimido a cada 12 horas',
    createdDate: '04/07/2020 - 19:05:33',
    vality: '01/05/2023',
  },
  {
    id: '217515',
    medicineName: 'Remédio aleatório pra alergia',
    dosage: '1 comprimido a cada 12 horas',
    createdDate: '04/07/2020 - 19:05:33',
    vality: '01/05/2023',
  },
];

const DoctorRecipeRegister = (): JSX.Element => {
  return (
    <Container>
      <RegisterRecipeTitle>Cadastrar Receita</RegisterRecipeTitle>
      <CPFPatientInput placeholder="CPF do paciente" />
      <AddMedicineButton onPress={() => { }}>
        <AddMedicineButtonLabel>Adicionar medicamentos</AddMedicineButtonLabel>
      </AddMedicineButton>
      <MedicinesList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RecipeMedicineCard data={item} />}
      />
      <DoneRecipeButton>
        <DoneRecipeButtonLabel>Finalizar receita</DoneRecipeButtonLabel>
      </DoneRecipeButton>
    </Container>
  );
};

export default DoctorRecipeRegister;
