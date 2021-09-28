import React from 'react';
import { Text } from 'react-native';
import {
  Label,
  MedicineBox,
  MedicineName,
  MedicineText,
  TextBox,
} from './style';

export default function MedicineItem(): JSX.Element {
  return (
    <MedicineBox>
      <MedicineName>Metamizol</MedicineName>
      <TextBox>
        <Label>Dosagem:</Label>
        <MedicineText>Tomar 20 got de 8/8 horas</MedicineText>
      </TextBox>

      <TextBox>
        <Label>Criada em:</Label>
        <MedicineText>04/07/2020 - 19:05:20</MedicineText>
      </TextBox>

      <TextBox>
        <Label>Valido até:</Label>
        <MedicineText>01/05/2022</MedicineText>
      </TextBox>
    </MedicineBox>
  );
}
