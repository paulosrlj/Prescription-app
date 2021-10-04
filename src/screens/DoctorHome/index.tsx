import React from 'react';
import Header from '../../components/DoctorHome/Header';
import RecipeRegister from '../../components/DoctorHome/RecipeRegister';
import { IsModalActiveProvider as IsExamModalActiveProvider } from '../../context/AddExamModal';
import { IsModalActiveProvider as IsMedicineModalActiveProvider } from '../../context/AddMedicineModal';
import { Container } from './styles';

const DoctorHome = (): JSX.Element => {
  return (
    <IsExamModalActiveProvider>
      <IsMedicineModalActiveProvider>
        <Container>
          <Header />
          <RecipeRegister />
        </Container>
      </IsMedicineModalActiveProvider>
    </IsExamModalActiveProvider>
  );
};

export default DoctorHome;
