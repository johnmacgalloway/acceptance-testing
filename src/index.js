import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetch } from './ducks/forecast';
import {toggle} from './ducks/forecast';

import Weather from './components/weather';
import createStore from './store';

var i = 0;

const store = createStore()
    , root = document.getElementById('root');
    
ReactDOM.render(
  <Provider store={store}>
    <Weather />
  </Provider>
, root);

var counter = 0;

function do_testing(){
    if(counter > 10)
    {
        return false;
    }
    /// do testing
    flow(i);
    /* in the last callback add this:
    counter++;
    do_huge_nested_craziness(); //recursion
    */
    i++;
    counter++;
}


function sleep(dur) {t=setTimeout("flow()",dur);} //starts flow control again after dur

function flow() {
    switch(i)
    {
    	case 0:
    		store.dispatch(fetch("Perth"));
            alert('Perth to be displayed');
    		//sleep(1000);
    		break;
    	case 1:
    		alert(' Perth about to toggle');
            store.dispatch(toggle("Perth"));
    		//sleep(2000);
    		break;
    	case 2:
    		store.dispatch(fetch("Edinburgh"));
    		alert( 'Edinburgh displayed')
    		//sleep(1000);
    		break;
    	default:
    		alert('Default - Aberdeen')
    		store.dispatch(fetch("Aberdeen"))
    		//sleep(3000);
    		break;
    }
}


do_testing();








