import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetch } from './ducks/forecast';

import Weather from './components/weather';
import createStore from './store';

const CITY ="Edinburgh";



const store = createStore()
    , root = document.getElementById('root');
    
var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();  


delay(function(){
    
ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>
, root);

store.dispatch(fetch("Glasgow"));
alert('Glasgow is being displayed');    
    
}, 60000 ); // end delay

   
delay(function(){
    
ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>
, root);

store.dispatch(fetch("Aberdeen"));
alert('Aberdeen is being displayed');    
    
}, 60000 ); // end delay 


delay(function(){
    
ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>
, root);

store.dispatch(fetch("Perth"));
alert('Perth is being displayed');    
    
}, 60000 ); // end delay 



