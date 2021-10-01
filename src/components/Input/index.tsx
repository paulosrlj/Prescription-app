import React from 'react';
import { InputText } from './styles';

interface IInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}

export default function Input(props: IInputProps): JSX.Element {
  const { placeholder, secureTextEntry, onChangeText } = props;
  return (
    <InputText
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
}
