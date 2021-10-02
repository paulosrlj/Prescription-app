import React from 'react';
import { MedicineType } from '../../context/Modal';
import {
  Label,
  MedicineBox,
  MedicineName,
  MedicineText,
  TextBox,
} from './style';

export interface Props {
  data: MedicineType;
}

export default function MedicineItem({ data }: Props): JSX.Element {
  return (
    <MedicineBox>
      <MedicineName>{data.nome}</MedicineName>
      <TextBox>
        <Label>Dosagem:</Label>
        <MedicineText>{data.dosagem}</MedicineText>
      </TextBox>
    </MedicineBox>
  );
}
