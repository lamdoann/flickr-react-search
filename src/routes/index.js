import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages';

const RootRoute = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
);

export default RootRoute;
