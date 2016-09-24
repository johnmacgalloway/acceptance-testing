import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetch } from './ducks/forecast';
import {toggle} from './ducks/forecast';

import Weather from './components/weather';
import createStore from './store';

const CITY ="Perth";
var i = 0;

const store = createStore()
    , root = document.getElementById('root');
    
//var perthdelay = ( function() {
//    var timer = 0;
//    return function(callback, ms) {
//        clearTimeout (timer);
//        timer = setTimeout(callback, ms);
//    };
//})();  
//alert('Perth is being displayed'); 

//perthdelay(function(){
    
//ReactDOM.render(
//  <Provider store={store}>
//    <Weather />
//  </Provider>
//, root);

function sleep(dur) {t=setTimeout("flow()",dur);} //starts flow control again after dur

function flow() {
    switch(i)
    {
    	case 0:
    		run(i);
    		store.dispatch(fetch(CITY));
            alert('Perth displayed');
    		sleep(1000);
    		break;
    	case 1:
    		run(i);
    		alert(' Perth about to toggle');
            store.dispatch(toggle("Perth"));
    		sleep(2000);
    		break;
    	case 2:
    		run(i);
    		store.dispatch(fetch(Edinburgh));
    		alert( 'Edinburgh displayed')
    		clearTimeout(t); //stops flow
    		break;
    	default:
    		run(i);
    		sleep(3000);
    		break;
    }
}

flow (0);
flow (1);

//alert(' Perth toggled');
//store.dispatch(fetch("Edinburgh"));
//alert('Edinburgh is being displayed'); 
    
}, 7 ); // end delay 




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

//alert(' Perth about to toggle');
//store.dispatch(toggle("Perth"));
//alert(' Perth toggled');
//store.dispatch(fetch("Edinburgh"));
//alert('Edinburgh is being displayed');    
    
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


