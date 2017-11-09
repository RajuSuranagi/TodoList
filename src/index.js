/**
 * The application start point.
 */
// Import modules from standard libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';

//Import modules from user libraries
import routes from './routes';
import reducers from './reducers';

// Render the app
ReactDOM.render(
   <Provider store={createStore(reducers)}>
       <Router history={ browserHistory } routes={ routes }/>
   </Provider>,
    document.querySelector('.container')
);