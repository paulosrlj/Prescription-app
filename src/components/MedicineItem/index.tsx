import React from 'react';
import {
  Label,
  MedicineBox,
  MedicineName,
  MedicineText,
  TextBox,
} from './style';

export interface MedicineProps {
  id: string;
  medicineName: string;
  categoria: string;
  numeroRegistro: number;
  classeTerapeutica: string;
  empresaDetentora: string;
  dosage: string;
  createdDate: string;
  vality: string;
}

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
