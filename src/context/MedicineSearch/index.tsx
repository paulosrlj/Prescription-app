import React, { createContext, useState, useContext } from 'react';
import { MedicineType } from '../../util/types';

const DEFAULT_VALUE = {
  isEmpty: true,
  setIsEmpty: () => ({}),
  medicineData: {
    id: '',
    nome: '',
    dosagem: '',
    idRegister: '',
    categoria: '',
    classe_terapeutica: '',
    empresa_detentora: '',
  },
  setMedicineData: () => ({}),
  medicine: '',
  setMedicine: () => ({}),
};

interface PropsMedicineContext {
  isEmpty: boolean;
  setIsEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  medicine: string;
  setMedicine: React.Dispatch<React.SetStateAction<string>>;
  medicineData: MedicineType;
  setMedicineData: React.Dispatch<React.SetStateAction<MedicineType>>;
}

const Context = createContext<PropsMedicineContext>(DEFAULT_VALUE);

interface Props {
  children: React.ReactNode;
}

function MedicineProvider({ children }: Props): JSX.Element {
  const [medicine, setMedicine] = useState(DEFAULT_VALUE.medicine);
  const [medicineData, setMedicineData] = useState(DEFAULT_VALUE.medicineData);
  const [isEmpty, setIsEmpty] = useState(DEFAULT_VALUE.isEmpty);

  return (
    <Context.Provider
      value={{
        medicine,
        setMedicine,
        medicineData,
        setMedicineData,
        isEmpty,
        setIsEmpty,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { MedicineProvider, Context };

export function useMedicineContext(): PropsMedicineContext {
  const context = useContext(Context);
  return context;
}
