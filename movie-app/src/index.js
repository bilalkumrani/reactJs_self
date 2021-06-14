import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import movies from './reducers/index';

const store = createStore(movies);


console.log('This is store',store.getState())

ReactDOM.render(
  <>
    <App store={store} />
  </>,
  document.getElementById('root')
);


