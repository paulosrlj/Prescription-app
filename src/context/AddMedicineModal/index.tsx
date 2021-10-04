import React, { createContext, useState } from 'react';
import { MedicineType } from '../../util/types';

export interface IAddMedicinesModalProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  allMedicines: MedicineType[];
  setAllMedicines: React.Dispatch<React.SetStateAction<MedicineType[]>>;
  filteredMedicines: MedicineType[];
  setFilteredMedicines: React.Dispatch<React.SetStateAction<MedicineType[]>>;
  selectedMedicine: MedicineType;
  setSelectedMedicine: React.Dispatch<React.SetStateAction<MedicineType>>;
  selectedMedicines: MedicineType[];
  setSelectedMedicines: React.Dispatch<React.SetStateAction<MedicineType[]>>;
}

const DEFAULT_VALUE: IAddMedicinesModalProps = {
  isActive: false,
  setIsActive: () => ({}),
  allMedicines: new Array<MedicineType>(),
  setAllMedicines: () => ({}),
  filteredMedicines: new Array<MedicineType>(),
  setFilteredMedicines: () => ({}),
  selectedMedicine: {
    id: '',
    idRegister: '',
    nome: '',
    categoria: '',
    classe_terapeutica: '',
    empresa_detentora: '',
    dosagem: '',
  },
  setSelectedMedicine: () => ({}),
  selectedMedicines: new Array<MedicineType>(),
  setSelectedMedicines: () => ({}),
};

const Context = createContext<IAddMedicinesModalProps>(DEFAULT_VALUE);

interface Props {
  children: React.ReactNode;
}

function IsModalActiveProvider({ children }: Props): JSX.Element {
  const [isActive, setIsActive] = useState(DEFAULT_VALUE.isActive);
  const [allMedicines, setAllMedicines] = useState(DEFAULT_VALUE.allMedicines);
  const [filteredMedicines, setFilteredMedicines] = useState(
    DEFAULT_VALUE.filteredMedicines,
  );
  const [selectedMedicine, setSelectedMedicine] = useState(
    DEFAULT_VALUE.selectedMedicine,
  );
  const [selectedMedicines, setSelectedMedicines] = useState(
    DEFAULT_VALUE.selectedMedicines,
  );

  return (
    <Context.Provider
      value={{
        isActive,
        setIsActive,
        allMedicines,
        setAllMedicines,
        filteredMedicines,
        setFilteredMedicines,
        selectedMedicine,
        setSelectedMedicine,
        selectedMedicines,
        setSelectedMedicines,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { IsModalActiveProvider, Context };
