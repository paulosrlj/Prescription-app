import React, { useContext } from 'react';
import MedicineCard from '../../components/MedicineCard';

import { Container, MedicamentoTitle } from './styles';
import SearchBar from '../../components/SearchBar';
import Logo from '../../components/Logo';

import { Context } from '../../context/MedicineSearch/index';

export default function Medicamentos(): JSX.Element {
  const { medicineData, isEmpty } = useContext(Context);

  return (
    <Container>
      <Logo />
      <MedicamentoTitle>Procurar Medicamento</MedicamentoTitle>
      <SearchBar />

      {!isEmpty && <MedicineCard data={medicineData} />}
    </Container>
  );
}
