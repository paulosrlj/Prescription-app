import React from 'react';
import { IRecipeMedicinesListProps } from '../DoctorRecipeRegister';
import { Container, MedicineName, MedicineDosage } from './styles';

interface IRecipeMedicineCardProps {
  data: IRecipeMedicinesListProps;
}

const RecipeMedicineCard = (props: IRecipeMedicineCardProps): JSX.Element => {
  const { data } = props;
  const { medicineName, dosage } = data;

  return (
    <Container>
      <MedicineName>{medicineName}</MedicineName>
      <MedicineDosage>{dosage}</MedicineDosage>
    </Container>
  );
};

export default RecipeMedicineCard;
