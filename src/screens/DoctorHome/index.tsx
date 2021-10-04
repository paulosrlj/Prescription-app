import React from 'react';
import Header from '../../components/DoctorHome/Header';
import RecipeRegister from '../../components/DoctorHome/RecipeRegister';
import { IsModalActiveProvider } from '../../context/AddMedicineModal';
import { Container } from './styles';

const DoctorHome = (): JSX.Element => {
  return (
    <IsModalActiveProvider>
      <Container>
        <Header />
        <RecipeRegister />
      </Container>
    </IsModalActiveProvider>
  );
};

export default DoctorHome;
