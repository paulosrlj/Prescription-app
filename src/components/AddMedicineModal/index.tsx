import React, { useContext, useEffect, useState } from 'react';
import { Modal, Pressable } from 'react-native';
import { AxiosResponse } from 'axios';

import {
  Icon,
  ModalBox,
  ModalContainer,
  ScreenTitle,
  SearchMedicineBox,
  SearchMedicineInput,
  SearchMedicineButton,
  SearchMedicineIcon,
  MedicinesList,
  DosageBox,
  DosageLabel,
  DosageInput,
  AddDosageButton,
  AddDosageButtonLabel,
  AddModalMedicineBox,
  CancelAddMedicineButton,
  CancelAddMedicineButtonLabel,
} from './styles';

import { Context } from '../../context/AddMedicineModal';

import api from '../../services/api';
import { MedicineType } from '../../util/types';
import ModalMedicineCard from '../ModalMedicineCard';
import ShowModalMedicineCard from '../ShowModalMedicineCard';

export default function AddMedicineModal(): JSX.Element {
  const {
    isActive,
    setIsActive,
    filteredMedicines,
    setFilteredMedicines,
    selectedMedicine,
    setSelectedMedicine,
    selectedMedicines,
    setSelectedMedicines,
  } = useContext(Context);

  const [dosagem, setDosagem] = useState('');

  const fetchMedicines = async () => {
    try {
      const { data: response } = (await api.get(
        '/medicines',
      )) as unknown as AxiosResponse<MedicineType[]>;
      setFilteredMedicines(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMedicines();
  });

  const clearSelectedMedicine = () => {
    setSelectedMedicine({
      id: '',
      idRegister: '',
      nome: '',
      categoria: '',
      classe_terapeutica: '',
      empresa_detentora: '',
      dosagem: '',
    });
  };

  const addRecipeMedicine = () => {
    const newSelectedMedicine = { ...selectedMedicine };
    newSelectedMedicine.dosagem = dosagem;
    const newSelectedMedicines = selectedMedicines.map(item => item);
    newSelectedMedicines.push(newSelectedMedicine);
    setSelectedMedicines(newSelectedMedicines);
    clearSelectedMedicine();
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={isActive}
      onRequestClose={() => {
        setIsActive(!isActive);
      }}
    >
      <ModalContainer>
        <ModalBox>
          <Pressable onPress={() => setIsActive(!isActive)}>
            <Icon name="window-close" />
          </Pressable>
          <ScreenTitle>Adicionar medicamentos</ScreenTitle>

          {selectedMedicine.nome === '' ? (
            <AddModalMedicineBox>
              <SearchMedicineBox>
                <SearchMedicineInput placeholder="Nome do medicamento" />
                <SearchMedicineButton>
                  <SearchMedicineIcon name="search" />
                </SearchMedicineButton>
              </SearchMedicineBox>
              <MedicinesList
                data={filteredMedicines}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ModalMedicineCard data={item} />}
              />
            </AddModalMedicineBox>
          ) : (
            <AddModalMedicineBox>
              <ShowModalMedicineCard data={selectedMedicine} />
              <DosageBox>
                <DosageLabel>Dosagem:</DosageLabel>
                <DosageInput onChangeText={setDosagem} placeholder="Dosagem" />
                <AddDosageButton onPress={() => addRecipeMedicine()}>
                  <AddDosageButtonLabel>Adicionar remédio</AddDosageButtonLabel>
                </AddDosageButton>
              </DosageBox>
              <CancelAddMedicineButton
                onPress={() => {
                  clearSelectedMedicine();
                }}
              >
                <CancelAddMedicineButtonLabel>
                  Não adicionar remédio
                </CancelAddMedicineButtonLabel>
              </CancelAddMedicineButton>
            </AddModalMedicineBox>
          )}
        </ModalBox>
      </ModalContainer>
    </Modal>
  );
}
