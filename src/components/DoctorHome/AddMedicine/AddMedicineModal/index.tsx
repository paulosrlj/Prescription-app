import React, { useContext, useState } from 'react';
import { Modal, Pressable } from 'react-native';

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
  ClearFiltersIcon,
  ClearFiltersButton,
} from './styles';

import { Context } from '../../../../context/AddMedicineModal';

import api from '../../../../services/api';
import { MedicineType } from '../../../../util/types';
import MedicineCard from '../MedicineCard';
import MedicineInfoCard from '../MedicineInfoCard';

export default function AddMedicineModal(): JSX.Element {
  const {
    isActive,
    setIsActive,
    allMedicines,
    selectedMedicine,
    setSelectedMedicine,
    selectedMedicines,
    setSelectedMedicines,
  } = useContext(Context);

  const [filteredMedicines, setFilteredMedicines] = useState(allMedicines);
  const [medicineName, setMedicineName] = useState('');
  const [dosagem, setDosagem] = useState('');

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

  const clearFilters = () => {
    setMedicineName('');
    setFilteredMedicines(allMedicines.map(item => item));
  };

  const searchMedicines = () => {
    if (medicineName !== '') {
      const newFilteredMedicines = allMedicines.filter(
        item =>
          item.nome.toUpperCase().indexOf(medicineName.toUpperCase()) === 0,
      );
      setFilteredMedicines(newFilteredMedicines);
    } else clearFilters();
  };

  const showMedicines = () => {
    return filteredMedicines.filter(
      item =>
        selectedMedicines.filter(
          medicine => medicine.idRegister === item.idRegister,
        ).length === 0,
    );
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
                <SearchMedicineInput
                  value={medicineName}
                  onChangeText={setMedicineName}
                  placeholder="Nome do medicamento"
                />
                <ClearFiltersButton onPress={() => clearFilters()}>
                  <ClearFiltersIcon name="window-close" />
                </ClearFiltersButton>
                <SearchMedicineButton onPress={() => searchMedicines()}>
                  <SearchMedicineIcon name="search" />
                </SearchMedicineButton>
              </SearchMedicineBox>
              <MedicinesList
                data={showMedicines()}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <MedicineCard data={item} />}
              />
            </AddModalMedicineBox>
          ) : (
            <AddModalMedicineBox>
              <MedicineInfoCard data={selectedMedicine} />
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
