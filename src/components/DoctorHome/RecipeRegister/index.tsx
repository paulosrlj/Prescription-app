import React, { useContext, useEffect, useState } from 'react';
import AddMedicineModal from '../AddMedicine/AddMedicineModal';
import RecipeMedicineCard from '../RecipeMedicineCard';
import { Context as AddExamModalContext } from '../../../context/AddExamModal';
import { Context as AddMedicineModalContext } from '../../../context/AddMedicineModal';
import {
  Container,
  RegisterRecipeTitle,
  RecipeInfoInput,
  AddMedicineButton,
  MedicinesList,
  DoneRecipeButton,
  AddMedicineButtonLabel,
  DoneRecipeButtonLabel,
  EmptyMedicinesList,
  EmptyMedicinesListLabel,
} from './styles';
import { MedicineType } from '../../../util/types';
import api from '../../../services/api';
import AddExamModal from '../AddExam/AddExamModal';

export interface IRecipeMedicinesListProps {
  id: string;
  idRegister: string;
  nome: string;
  categoria: string;
  classe_terapeutica: string;
  empresa_detentora: string;
  dosagem: string;
}

interface IMedicineRequest {
  idRegister: string;
  dosagem: string;
}

export interface IRecipeRequest {
  cpf_patient: string;
  illness_name: string;
  validade: string;
  medicines: IMedicineRequest[];
  due: boolean;
}

const RecipeRegister = (): JSX.Element => {
  const {
    isActive: AddMedicineModalIsActive,
    setIsActive: setAddMedicineModalIsActive,
    selectedMedicines,
    setSelectedMedicines,
    setAllMedicines,
  } = useContext(AddMedicineModalContext);

  const {
    isActive: AddExamModalIsActive,
    setIsActive: setAddExamModalIsActive,
  } = useContext(AddExamModalContext);

  const [cpfPatient, setCpfPatient] = useState('');
  const [illnessName, setIllnessName] = useState('');

  const toggleAddExamModal = () => {
    setAddExamModalIsActive(!AddMedicineModalIsActive);
  };

  const toggleAddMedicineModal = () => {
    setAddMedicineModalIsActive(!AddExamModalIsActive);
  };

  const removeRecipeMedicine = (medicine: MedicineType) => {
    const newSelectedMedicines = selectedMedicines.filter(
      selectedMedicine => selectedMedicine.id !== medicine.id,
    );

    setSelectedMedicines(newSelectedMedicines);
  };

  const validade = (anos: number) => {
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear() + anos;

    return `${date}/${month}/${year}`;
  };

  const clearRecipe = () => {
    setCpfPatient('');
    setIllnessName('');
    setSelectedMedicines(new Array<MedicineType>());
  };

  const fieldsValidation = () => {
    if (cpfPatient.trim() === '' || illnessName.trim() === '') return false;
    return true;
  };

  const createRecipe = async () => {
    if (!fieldsValidation()) return;

    const medicines = selectedMedicines.map(item => ({
      idRegister: item.idRegister,
      dosagem: item.dosagem,
    }));

    const recipe: IRecipeRequest = {
      cpf_patient: cpfPatient,
      illness_name: illnessName,
      medicines,
      validade: validade(5),
      due: false,
    };

    console.log(recipe);

    await api.post('/recipes', recipe).then(
      () => {
        clearRecipe();
      },
      err => {
        console.log(err);
      },
    );
  };

  const fetchMedicines = async () => {
    await api.get('/medicines').then(
      response => {
        const { data } = response;
        setAllMedicines(data);
      },
      err => {
        console.log(err);
      },
    );
  };

  useEffect(() => {
    fetchMedicines();
  });

  const data = selectedMedicines;

  return (
    <Container>
      <RegisterRecipeTitle>Cadastrar Receita</RegisterRecipeTitle>
      <RecipeInfoInput
        value={cpfPatient}
        onChangeText={setCpfPatient}
        placeholder="CPF do paciente"
      />
      <RecipeInfoInput
        value={illnessName}
        onChangeText={setIllnessName}
        placeholder="Nome da doen??a"
      />
      <AddMedicineButton onPress={() => toggleAddExamModal()}>
        <AddMedicineButtonLabel>Adicionar exame</AddMedicineButtonLabel>
      </AddMedicineButton>
      <AddMedicineButton onPress={() => toggleAddMedicineModal()}>
        <AddMedicineButtonLabel>Adicionar medicamentos</AddMedicineButtonLabel>
      </AddMedicineButton>
      {selectedMedicines.length > 0 ? (
        <MedicinesList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <RecipeMedicineCard
              removeRecipeMedicine={removeRecipeMedicine}
              data={item}
            />
          )}
        />
      ) : (
        <EmptyMedicinesList>
          <EmptyMedicinesListLabel>
            Nenhum medicamento adicionado
          </EmptyMedicinesListLabel>
        </EmptyMedicinesList>
      )}
      <DoneRecipeButton onPress={() => createRecipe()}>
        <DoneRecipeButtonLabel>Finalizar receita</DoneRecipeButtonLabel>
      </DoneRecipeButton>
      <AddExamModal />
      <AddMedicineModal />
    </Container>
  );
};

export default RecipeRegister;
