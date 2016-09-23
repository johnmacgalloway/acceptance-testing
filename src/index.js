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

store.dispatch(fetch(ABERDEEN));
store.disptach(fetch(GLASGOW));
