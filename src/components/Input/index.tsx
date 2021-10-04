import React from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import { InputText } from './styles';

interface IInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value?: string | undefined;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
}

export default function Input(props: IInputProps): JSX.Element {
  const {
    placeholder,
    secureTextEntry,
    onChangeText,
    value,
    keyboardType,
    maxLength,
    onBlur,
  } = props;
  return (
    <InputText
      onBlur={onBlur}
      maxLength={maxLength}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
    />
  );
}
