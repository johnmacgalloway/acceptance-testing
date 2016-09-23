import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetch } from './ducks/forecast';

import Weather from './components/weather';
import createStore from './store';

const ABERDEEN = 'Aberdeen';
const GLASGOW = 'Glasgow';


const store = createStore()
    , root = document.getElementById('root');
    
ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>
, root);

function myLoop(i) {
  return Promise.delay(1000)
    .then(function() {
      if (i > 0) {
        store.dispatch(fetch(GLASGOW));
        alert('Glasgow displayed');
        return myLoop(i-=1);
      }
    });
}

myLoop(3);



