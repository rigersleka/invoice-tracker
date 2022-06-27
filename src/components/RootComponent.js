import React from 'react';

import SignInComponent from './SignInComponent';
import SignUpComponent from './SignUpComponent';
import RatingField from './RatingField';
import CreateInvoiceComponent from './CreateInvoiceComponent';
import EmailField from './EmailField';

const RootComponent = () => {
  return (
    <>
      <SignInComponent />
      <SignUpComponent />
      <CreateInvoiceComponent />
      <RatingField />
      <EmailField />
    </>
  );
};

export default RootComponent;
