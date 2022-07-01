import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';

/* import Styles */
import {
  Container,
  ContentContainer,
} from '../style-components/Container.styled';
import {
  Title,
  Label,
  InputNameField,
  ErrorLabel,
  CheckboxContainer,
  RememberMeCheckboxField,
  CheckboxLabel,
  SubmitButton,
} from '../style-components/Element.styles';

const SignInForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;

const SignInComponent = () => {
  const handleSubmit = (values) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        alert(JSON.stringify(values));
      }, 5000);
    });
  };

  const handleValidation = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email cant be empty';
    }

    if (!values.password) {
      errors.password = 'Password cant be empty';
    } else if (values.password.length < 8) {
      errors.password = 'Password should be at least 8 characters';
    }

    return errors;
  };

  return (
    <Container>
      <ContentContainer>
        <Title>{'Sign In'}</Title>
        <Formik
          initialValues={{ email: '', password: '', rememberMe: false }}
          onSubmit={handleSubmit}
          validate={handleValidation}
        >
          {(props) => (
            <SignInForm>
              <Label>Email</Label>
              <InputNameField name='email' type='email' />

              <ErrorMessage name='email'>
                {(error) => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <Label>Password</Label>
              <InputNameField name='password' type='password' />

              <ErrorMessage name='password'>
                {(error) => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <CheckboxContainer>
                <RememberMeCheckboxField type='checkbox' name='rememberMe' />
                <CheckboxLabel>Remember me</CheckboxLabel>
              </CheckboxContainer>

              <SubmitButton type='submit' disabled={props.isSubmitting} />
            </SignInForm>
          )}
        </Formik>
      </ContentContainer>
    </Container>
  );
};

export default SignInComponent;
