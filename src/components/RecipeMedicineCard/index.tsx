import React from 'react';
import { IRecipeMedicinesListProps } from '../DoctorRecipeRegister';
import {
  Container,
  MedicineName,
  MedicineDosage,
  MedicineInfo,
  DeleteMedicineIcon,
  DeleteMedicineButton,
} from './styles';

interface IRecipeMedicineCardProps {
  data: IRecipeMedicinesListProps;
}

const RecipeMedicineCard = (props: IRecipeMedicineCardProps): JSX.Element => {
  const { data } = props;
  const { nome, dosagem } = data;

  return (
    <Container>
      <MedicineInfo>
        <MedicineName>{nome}</MedicineName>
        <DeleteMedicineButton>
          <DeleteMedicineIcon name="delete" />
        </DeleteMedicineButton>
      </MedicineInfo>
      <MedicineDosage>{dosagem}</MedicineDosage>
    </Container>
  );
};

export default RecipeMedicineCard;
