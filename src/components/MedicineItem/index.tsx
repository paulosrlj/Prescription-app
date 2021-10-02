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
  data: MedicineProps;
}

export default function MedicineItem({ data }: Props): JSX.Element {
  return (
    <MedicineBox>
      <MedicineName>{data.medicineName}</MedicineName>
      <TextBox>
        <Label>Dosagem:</Label>
        <MedicineText>{data.dosage}</MedicineText>
      </TextBox>

      <TextBox>
        <Label>Criada em:</Label>
        <MedicineText>{data.createdDate}</MedicineText>
      </TextBox>

      <TextBox>
        <Label>Valido até:</Label>
        <MedicineText>{data.vality}</MedicineText>
      </TextBox>
    </MedicineBox>
  );
}
