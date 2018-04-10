import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { reducer, saga } from './modules';
import App from './App';
import { flickr } from './api';
import search from './modules/search';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

flickr.fetchPhotos('insta');

render(<App store={store} />, document.getElementById('root'));