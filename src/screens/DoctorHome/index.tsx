import React from 'react';
import DoctorHomeHeader from '../../components/DoctorHomeHeader';
import DoctorRecipeRegister from '../../components/DoctorRecipeRegister';
import { IsModalActiveProvider } from '../../context/AddMedicineModal';
import { Container } from './styles';

const DoctorHome = (): JSX.Element => {
  return (
    <IsModalActiveProvider>
      <Container>
        <DoctorHomeHeader />
        <DoctorRecipeRegister />
      </Container>
    </IsModalActiveProvider>
  );
};

export default DoctorHome;
