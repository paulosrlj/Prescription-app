import React from 'react';
import { IRecipeMedicinesListProps } from '../../components/DoctorRecipeRegister';
import Logo from '../../components/Logo';
import RecipeMedicineCard from '../../components/RecipeMedicineCard';
import {
  Container,
  ScreenTitle,
  SearchMedicineBox,
  SearchMedicineInput,
  SearchMedicineIcon,
  DosageBox,
  DosageLabel,
  DosageInput,
  AddDosageButton,
  AddDosageButtonLabel,
  SearchMedicineButton,
  MedicinesList,
} from './styles';

const data: IRecipeMedicinesListProps[] = [
  {
    id: '4b5b8189-0137-4e66-b285-7737a284170',
    idRegister: '102030',
    nome: 'Dipirona',
    categoria: 'Remédio',
    classe_terapeutica: 'Analgésico',
    empresa_detentora: 'Farmaco LTDA',
    dosagem: '1ml a cada 2 horas',
  },
  {
    id: 'd0bee775-873b-43fe-a45f-8a9df6f0d5f',
    idRegister: '908070',
    nome: 'Leuvofloxacino',
    categoria: 'Remédio',
    classe_terapeutica: 'Antialérgico',
    empresa_detentora: 'Farmaco LTDA',
    dosagem: '1 comprimido por dia',
  },
  {
    id: 'ab5ad859-7e50-4f87-b250-53063be3e08',
    idRegister: '123456782',
    nome: 'Dipirocaa',
    categoria: 'Dor de cabeça',
    classe_terapeutica: 'Dores musculares',
    empresa_detentora: 'Inferno LTDA',
    dosagem: '1 comprimido a cada 6 horas',
  },
];

const AddMedicine = (): JSX.Element => {
  return (
    <Container>
      <Logo />
      <ScreenTitle>Adicionar medicamentos</ScreenTitle>
      <SearchMedicineBox>
        <SearchMedicineInput placeholder="Nome do medicamento" />
        <SearchMedicineButton>
          <SearchMedicineIcon name="search" />
        </SearchMedicineButton>
      </SearchMedicineBox>
      <MedicinesList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RecipeMedicineCard data={item} />}
      />
      <DosageBox>
        <DosageLabel>Dosagem:</DosageLabel>
        <DosageInput />
        <AddDosageButton>
          <AddDosageButtonLabel>Adicionar remédio</AddDosageButtonLabel>
        </AddDosageButton>
      </DosageBox>
    </Container>
  );
};

export default AddMedicine;
