import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import RootRoute from  './routes';

export default function App({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <RootRoute />
      </Router>
    </Provider>
  );
}
