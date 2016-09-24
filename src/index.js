import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetch } from './ducks/forecast';

import Weather from './components/weather';
import createStore from './store';

const CITY ="Edinburgh";

const store = createStore()
    , root = document.getElementById('root');
    
var Perthdelay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();  

Perthdelay(function(){
    
ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>
, root);

store.dispatch(fetch("Perth"));
alert('Perth is being displayed');    
    
}, 7000 ); // end delay 

var Edidelay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();  

Edidelay(function(){
    
ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>
, root);

store.dispatch(fetch("Edinburgh"));
alert('Edinburgh is being displayed');    
    
}, 7000 ); // end delay 



