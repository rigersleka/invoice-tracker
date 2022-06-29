import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import SignInComponent from './SignInComponent';
import SignUpComponent from './SignUpComponent';
import CreateInvoiceComponent from './CreateInvoiceComponent';

const RootComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={'/signin'} render={() => <SignInComponent />} />
        <Route exact path={'/signup'} render={() => <SignUpComponent />} />
        <Route
          exact
          path={'/create_invoice'}
          render={() => <CreateInvoiceComponent />}
        />
      </Switch>
    </Router>
  );
};

export default RootComponent;
