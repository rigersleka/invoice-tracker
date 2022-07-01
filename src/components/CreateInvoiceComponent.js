import React, { useRef } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

import {
  Container,
  ContentContainer,
} from '../style-components/Container.styled';
import {
  Label,
  Title,
  InputNameField,
  ErrorLabel,
  FileInput,
  SubmitButton,
} from '../style-components/Element.styles';

const CreateInvoiceForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;

const CreateInvoiceSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required("Email can't be empty"),
  projectName: Yup.string().required("Project name can't be empty"),
  billedAmount: Yup.number()
    .required("Billed amount can't be empty")
    .min(1, 'Invalid amont'),
  rating: Yup.number().min(1, "Rating can't be empty"),
});

const CreateInvoiceComponent = () => {
  const fileInput = useRef(null);

  function handleSubmit() {
    alert(fileInput.current.value);
  }

  return (
    <Container>
      <ContentContainer>
        <Title>{'Create Invoice'}</Title>

        <Formik
          initialValues={{
            email: '',
            projectName: '',
            billedAmount: '',
            rating: 0,
          }}
          onSubmit={() => handleSubmit}
          validationSchema={CreateInvoiceSchema}
        >
          {(props) => (
            <CreateInvoiceForm>
              <Label>Project Name</Label>
              <InputNameField name='projectName' type='text' />
              <ErrorMessage name='projectName'>
                {(error) => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <Label>Billed Amount (USD)</Label>
              <InputNameField name='billedAmount' type='number' />

              <ErrorMessage name='billedAmount'>
                {(error) => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <Label>Upload receipt(s)</Label>
              <FileInput type='file' ref={fileInput} />

              <SubmitButton type='submit' disabled={props.isSubmitting} />
            </CreateInvoiceForm>
          )}
        </Formik>
      </ContentContainer>
    </Container>
  );
};

export default CreateInvoiceComponent;
