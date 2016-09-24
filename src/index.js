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
    
ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>
, root);

function sleep(dur) {t=setTimeout("flow()",dur);} //starts flow control again after dur

function flow() {
    switch(i)
    {
    	case 0:
    		store.dispatch(fetch("Perth"));
            alert('Perth to be displayed');
    		sleep(1000);
    		break;
    	case 1:
    		alert(' Perth about to toggle');
            store.dispatch(toggle("Perth"));
    		sleep(2000);
    		break;
    	case 2:
    		store.dispatch(fetch("Edinburgh"));
    		alert( 'Edinburgh displayed')
    		//clearTimeout(t); //stops flow
    		break;
    	default:
    	 ReactDOM.render(
    <Provider store={store}>
    <Weather />
  </Provider>
, root);
    		alert('Default - Aberdeen')
    		store.dispatch(fetch("Aberdeen"))
    		sleep(3000);
    		break;
    }
}

flow (switch = 0);
flow (switch = 2);

//alert(' Perth toggled');
//store.dispatch(fetch("Edinburgh"));
//alert('Edinburgh is being displayed'); 
    
//}, 7 ); // end delay 






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


