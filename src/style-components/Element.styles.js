import styled from 'styled-components';
import { Field } from 'formik';

const Label = styled.label`
  font-size: 24px;
  margin-top: 10px;
`;

const PasswordField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const EmailField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const ProjectNameField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const BilledAmountField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const SubmitButton = styled.input`
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

const ErrorLabel = styled.div`
  font-size: 26px;
  color: red;
`;

const FileInput = styled.input`
  margin-top: 10px;
  font-size: 16px;
`;
