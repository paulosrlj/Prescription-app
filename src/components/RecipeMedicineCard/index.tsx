import React from 'react';
import { MedicineType } from '../../util/types';
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
  removeRecipeMedicine(medicine: MedicineType): void;
}

const RecipeMedicineCard = (props: IRecipeMedicineCardProps): JSX.Element => {
  const { data, removeRecipeMedicine } = props;
  const { nome, dosagem } = data;

  return (
    <Container>
      <MedicineInfo>
        <MedicineName>{nome}</MedicineName>
        <DeleteMedicineButton onPress={() => removeRecipeMedicine(data)}>
          <DeleteMedicineIcon name="delete" />
        </DeleteMedicineButton>
      </MedicineInfo>
      <MedicineDosage>{dosagem}</MedicineDosage>
    </Container>
  );
};

export default RecipeMedicineCard;
