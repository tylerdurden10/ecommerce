// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Book
import { book } from './book';

// Pages
import { Home } from '../pages/home';
import { FormElements } from '../pages/form_elements';
import { Page404 } from '../pages/404';

// Routes
export const Routes = () => (
  <Switch>
    <Route exact path={book.root}>
      <Home />
    </Route>
    <Route exact path={book.form_elements}>
      <FormElements />
    </Route>
    <Route>
      <Page404 />
    </Route>
  </Switch>
);
