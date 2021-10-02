import React from 'react';
import MedicineForm from '../../components/MedicineForm';

export default function MedicineRegister(): JSX.Element {
  const paragraph = 'Adicione um medicamento';

  return <MedicineForm paragraph={paragraph} typeOfIdentification="crm" />;
}
