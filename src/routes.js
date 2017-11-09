import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import List from './components/list';
import Item from './components/item';


export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ List } />
        <Route path="add" component={ Item }/>
    </Route>
);