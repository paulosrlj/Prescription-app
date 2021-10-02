import React, { createContext, useState } from 'react';

interface MedicineType {
  id: string;
  medicineName: string;
  categoria: string;
  numeroRegistro: number;
  classeTerapeutica: string;
  empresaDetentora: string;
  dosage: string;
  createdDate: string;
  vality: string;
}

interface RecipeType {
  id: string;
  illnessName: string;
  responsibleDoctor: string;
  medicineList: MedicineType[];
}

const DEFAULT_VALUE = {
  isActive: false,
  setIsActive: () => ({}),
  recipeProps: {
    id: '',
    illnessName: '',
    responsibleDoctor: '',
    medicineList: [
      {
        id: '',
        medicineName: '',
        dosage: '',
        createdDate: '',
        vality: '',
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
