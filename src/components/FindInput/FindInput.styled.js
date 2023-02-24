import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
`;

export const InputSt = styled.input`
  padding-top: 10px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid black;

  &:focus {
    background-color: transparent;
    outline: none;
  }
`;
