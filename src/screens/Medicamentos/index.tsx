import React from 'react';
import { MedicineProps } from '../../components/MedicineItem';
import MedicineCard from '../../components/MedicineCard';

import { Container, MedicamentoTitle, MedicamentoList } from './styles';
import SearchBar from '../../components/SearchBar';

export interface Data {
  data: MedicineProps;
}

export default function Medicamentos(): JSX.Element {
  const data: MedicineProps[] = [
    {
      id: '1',
      medicineName: 'Dipirona',
      categoria: 'Generico',
      numeroRegistro: 1524682,
      classeTerapeutica: 'Analgésicos',
      empresaDetentora: 'Laboratorios Stardust',
      dosage: '2x ao dia',
      createdDate: '10/05/2021',
      vality: '10/05/2022',
    },
    {
      id: '2',
      medicineName: 'Anador',
      categoria: 'Generico',
      numeroRegistro: 1524683,
      classeTerapeutica: 'Analgésicos',
      empresaDetentora: 'Laboratorios Maaweee',
      dosage: 'Antes de dormir',
      createdDate: '11/08/2021',
      vality: '11/08/2023',
    },
    {
      id: '3',
      medicineName: 'Alois',
      categoria: 'Antibiotico',
      numeroRegistro: 1524684,
      classeTerapeutica: 'Analgésicos',
      empresaDetentora: 'Laboratorios Umbrella',
      dosage: '3x ao dia',
      createdDate: '10/05/2021',
      vality: '10/05/2024',
    },
  ];

  return (
    <Container>
      <MedicamentoTitle>Lista de Medicamentos</MedicamentoTitle>
      <SearchBar />
      <MedicamentoList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MedicineCard data={item} />}
      />
    </Container>
  );
}
