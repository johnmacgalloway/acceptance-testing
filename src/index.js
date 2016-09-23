import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetch } from './ducks/forecast';

import Weather from './components/weather';
import createStore from './store';

const CITY;



const store = createStore()
    , root = document.getElementById('root');
    
var delay = ( function(CITY) {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();  


delay(function(Aberdeen){
    
ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>
, root);

store.dispatch(fetch(CITY));
alert('Aberdeen is being displayed');    
    
}, 600 ); // end delay

    







