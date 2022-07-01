import { Formik, Form, ErrorMessage } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import {
  Container,
  ContentContainer,
  Title,
} from '../style-components/Container.styled';
import {
  EmailField,
  ErrorLabel,
  Label,
  PasswordField,
  SubmitButton,
} from '../style-components/Element.styles';

const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;

let EmailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email cant be empty'),
});

let PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password cant be emptyca')
    .test('len', 'Very weak', (val) => val.length > 5)
    .test('len', 'Weak', (val) => val.length > 8),
});

const SignUpComponent = () => {
  const handleSubmit = (values) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        alert(JSON.stringify(values));
      }, 5000);
    });
  };

  const validatePassword = (value) => {
    let error = undefined;

    try {
      PasswordSchema.validateSync({ password: value });
    } catch (validationError) {
      error = validationError.error[0];
    }

    return error;
  };
  return (
    <Container>
      <ContentContainer>
        <Title>{'Sign Up'}</Title>

        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          onSubmit={handleSubmit}
          validationSchema={EmailSchema}
        >
          {(props) => (
            <SignUpForm>
              <Label>Email</Label>
              <EmailField name='email' type='email' />
              <ErrorMessage name='email'>
                {(error) => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <Label>Password</Label>
              <PasswordField
                name='password'
                type='password'
                validate={validatePassword}
              />
              <ErrorMessage name='password'>
                {(error) => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <Label>Password</Label>
              <PasswordField
                name='confirmPassword'
                type='password'
                validate={validatePassword}
              />
              <ErrorMessage name='confirmPassword'>
                {(error) => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <SubmitButton type='submit' />
            </SignUpForm>
          )}
        </Formik>
      </ContentContainer>
    </Container>
  );
};

export default SignUpComponent;
