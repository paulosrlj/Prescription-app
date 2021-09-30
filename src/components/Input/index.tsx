import React from 'react';
import { InputText } from './styles';

interface IInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
}

export default function Input(props: IInputProps): JSX.Element {
  const { placeholder, secureTextEntry } = props;
  return (
    <InputText placeholder={placeholder} secureTextEntry={secureTextEntry} />
  );
}
