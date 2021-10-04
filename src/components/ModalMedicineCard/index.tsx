import React, { useContext } from 'react';
import { MedicineType } from '../../util/types';
import { Context } from '../../context/AddMedicineModal';
import {
  Container,
  MedicineIcon,
  MedicineInfoBox,
  MedicineName,
  MedicineClass,
} from './styles';

interface IModalMedicineCardProps {
  data: MedicineType;
}

const ModalMedicineCard = (props: IModalMedicineCardProps): JSX.Element => {
  const { data } = props;
  const { nome, classe_terapeutica } = data;
  const { setSelectedMedicine } = useContext(Context);

  return (
    <Container onPress={() => setSelectedMedicine(data)}>
      <MedicineIcon name="pill" />
      <MedicineInfoBox>
        <MedicineName>{nome}</MedicineName>
        <MedicineClass>{classe_terapeutica}</MedicineClass>
      </MedicineInfoBox>
    </Container>
  );
};

export default ModalMedicineCard;
