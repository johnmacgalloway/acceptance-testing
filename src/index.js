import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetch } from './ducks/forecast';

import Weather from './components/weather';
import createStore from './store';

const CITY ="Perth";

const store = createStore()
    , root = document.getElementById('root');
    
var perthdelay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();  
//alert('Perth is being displayed'); 

perthdelay(function(){
    
ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>
, root);

store.dispatch(fetch(CITY));
alert('Perth displayed');

    
}, 7 ); // end delay 

store.dispatch(toggle("Perth"))
alert(' Perth toggled')


var edidelay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();  

edidelay(function(){
    
ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>
, root);

store.dispatch(fetch("Edinburgh"));
alert('Edinburgh is being displayed');    
    
}, 7 ); // end delay 

var gladelay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();  

gladelay(function(){
    
ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>
, root);

store.dispatch(fetch("Glasgow"));
alert('Glasgow is being displayed');    
    
}, 7 ); // end delay 


