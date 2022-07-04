import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

/* import Styles */
import {
  Container,
  ContentContainer,
  Title,
} from '../style-components/Container.styled';
import {
  ErrorLabel,
  Label,
  InputNameField,
  SubmitButton,
} from '../style-components/Element.styles';

const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;

/** YUP validation */
let SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email cant be empty'),
});

let PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password cant be empty')
    .test('len', 'Very weak', (val) => val.length > 5)
    .test('len', 'Weak', (val) => val.length > 8),
});

const SignUpComponent = () => {
  function handleSubmit(values) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        alert(JSON.stringify(values));
      }, 5000);
    });
  }

  function validatePassword(value) {
    var error = undefined;

    try {
      PasswordSchema.validateSync({ password: value });
    } catch (validationError) {
      error = validationError.errors[0];
    }

    return error;
  }

  return (
    <Container>
      <ContentContainer>
        <Title>{'Sign Up'}</Title>

        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
        >
          {(props) => (
            <SignUpForm>
              <Label>Email</Label>
              <InputNameField name='email' type='email' />

              <ErrorMessage name='email'>
                {(error) => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <Label>Password</Label>
              <InputNameField
                name='password'
                validate={validatePassword}
                type='password'
              />

              <ErrorMessage name='password'>
                {(error) => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <Label>Confirm Password</Label>
              <InputNameField
                name='confirmPassword'
                validate={validatePassword}
                type='password'
              />

              <ErrorMessage name='confirmPassword'>
                {(error) => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <SubmitButton type='submit' disabled={props.isSubmitting} />
            </SignUpForm>
          )}
        </Formik>
      </ContentContainer>
    </Container>
  );
};

export default SignUpComponent;
