import React, { createContext, useState } from 'react';
import { MedicineType } from '../../util/types';

export interface IAddMedicinesModalProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const DEFAULT_VALUE: IAddMedicinesModalProps = {
  isActive: false,
  setIsActive: () => ({}),
};

const Context = createContext<IAddMedicinesModalProps>(DEFAULT_VALUE);

interface Props {
  children: React.ReactNode;
}

function IsModalActiveProvider({ children }: Props): JSX.Element {
  const [isActive, setIsActive] = useState(DEFAULT_VALUE.isActive);

  return (
    <Context.Provider
      value={{
        isActive,
        setIsActive,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { IsModalActiveProvider, Context };
