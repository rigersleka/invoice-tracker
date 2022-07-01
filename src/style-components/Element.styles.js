import styled from 'styled-components';
import { Field } from 'formik';

export const Label = styled.label`
  font-size: 24px;
  margin-top: 10px;
`;

export const PasswordField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

export const EmailField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

export const ProjectNameField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

export const BilledAmountField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

export const SubmitButton = styled.input`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #666666;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
`;

export const ErrorLabel = styled.div`
  font-size: 26px;
  color: red;
`;

export const FileInput = styled.input`
  margin-top: 10px;
  font-size: 16px;
`;

export const Title = styled.h1`
  white-space: pre-line;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

export const RememberMeCheckboxField = styled(Field)`
  margin-top: 10px;
`;

export const CheckboxLabel = styled(Label)`
  margin-top: 7px;
  margin-left: 10px;
`;
