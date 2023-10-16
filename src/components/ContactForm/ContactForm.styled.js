import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  background-image: linear-gradient(-180deg, blueviolet 0%, #404040 100%);
  font-family: Coiny;
  color: #b88efa;
  padding: 30px;
  border: 3px solid blueviolet;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  color: #ff87fb;
  font-family: Coiny;
  font-size: 20px;
  font-weight: 600;
`;

export const InputForm = styled(Field)`
  padding: 10px;
  border: 1px solid blueviolet;
  border-radius: 16px;
  background-color: #b88efa;
`;

export const ErrorForm = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

export const ButtonForm = styled.button`
  background: linear-gradient(to bottom, #3a0880, #863cb1, #ce13db);
  font-family: Coiny;
  font-size: 20px;
  font-weight: 600;
  background-color: #4f2ee8;
  color: #ff87fb;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: magenta;
  }
`;
