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

store.dispatch(fetch(GLASGOW));
alert('Glasgow being displayed');    
    
}, 600 ); // end delay

    







