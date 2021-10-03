import React, { createContext, useState, useContext } from 'react';

const DEFAULT_VALUE = {
  isDoctor: false,
  setIsDoctor: () => ({}),
};

interface PropsIsDoctorContext {
  isDoctor: boolean;
  setIsDoctor: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<PropsIsDoctorContext>(DEFAULT_VALUE);

interface Props {
  children: React.ReactNode;
}

function IsDoctorProvider({ children }: Props): JSX.Element {
  const [isDoctor, setIsDoctor] = useState(DEFAULT_VALUE.isDoctor);

  return (
    <Context.Provider
      value={{
        isDoctor,
        setIsDoctor,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { IsDoctorProvider, Context };

export function useMedicineContext(): PropsIsDoctorContext {
  const context = useContext(Context);
  return context;
}
