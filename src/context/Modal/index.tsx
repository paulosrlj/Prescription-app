import React, { createContext, useState } from 'react';

export interface MedicineType {
  id: string;
  nome: string;
  dosagem: string;
}

export interface DoctorType {
  crm: string;
  name: string;
}

export interface RecipeType {
  id: string;
  illness_name: string;
  due: boolean;
  validade: Date;
  doctor: DoctorType;
  medicines: MedicineType[];
}

const DEFAULT_VALUE = {
  isActive: false,
  setIsActive: () => ({}),
  recipeProps: {
    id: '',
    illness_name: '',
    doctor: {
      crm: '',
      name: '',
    },
    validade: new Date(),
    due: false,
    medicines: [
      {
        id: '',
        nome: '',
        dosagem: '',
      },
    ],
  },
  setRecipeProps: () => ({}),
};

interface PropsModalContext {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  recipeProps: RecipeType;
  setRecipeProps: React.Dispatch<React.SetStateAction<RecipeType>>;
}

const Context = createContext<PropsModalContext>(DEFAULT_VALUE);

interface Props {
  children: React.ReactNode;
}

function IsModalActiveProvider({ children }: Props): JSX.Element {
  const [isActive, setIsActive] = useState(DEFAULT_VALUE.isActive);
  const [recipeProps, setRecipeProps] = useState(DEFAULT_VALUE.recipeProps);

  return (
    <Context.Provider
      value={{
        isActive,
        setIsActive,
        recipeProps,
        setRecipeProps,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { IsModalActiveProvider, Context };
