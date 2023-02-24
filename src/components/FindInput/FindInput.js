import React from 'react';
import { Label, InputSt } from './FindInput.styled';
import PropTypes from 'prop-types';

export function Input({ onHandlerChange }) {
  return (
    <Label>
      Find contact by name
      <InputSt type="text" name="find" onChange={onHandlerChange} />
    </Label>
  );
}

Input.propTypes = {
  onHandlerChange: PropTypes.func.isRequired,
};
