import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.css';

import debug from 'debug';
import React from 'react';
import { Router, Route, Link , browserHistory } from 'react-router'
import { render } from 'react-dom';
import {pageRoutes} from 'js/components/main-routes/main-routes';
import MainPage from 'js/pages/main-page/main-page';

import {Provider} from 'react-redux';
import store from './store';

const log = debug('application:bootstrap');

log('creating application node')

const applicationNode = document.createElement('div')
applicationNode.className = 'app-container'
applicationNode.id = 'application'


log('adding application node to body')
document.body.appendChild(applicationNode)

render((
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={MainPage}>
          {pageRoutes()}
        </Route>
      </Router>
    </Provider>
  ), applicationNode, () => {
  log('finished mounting application')
})