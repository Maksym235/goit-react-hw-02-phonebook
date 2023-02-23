import React from 'react';
import { Label, InputSt } from './input.styled';

export function Input({ onHandlerChange }) {
  return (
    <Label>
      Find contact by name
      <InputSt type="text" name="find" onChange={onHandlerChange} />
    </Label>
  );
}
