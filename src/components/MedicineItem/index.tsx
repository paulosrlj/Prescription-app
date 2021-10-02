import React from 'react';
import {
  Label,
  MedicineBox,
  MedicineName,
  MedicineText,
  TextBox,
} from './style';

import { MedicineType } from '../../context/Modal';

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
