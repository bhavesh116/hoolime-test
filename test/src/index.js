import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from 'react-router-dom'
import Details from './Component/details'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import rootreducer from './reducer'
const createStorewithmiddleware = applyMiddleware(promiseMiddleware)(createStore);
ReactDOM.render(
  <Provider store={createStorewithmiddleware(rootreducer)}>
  <div>
<BrowserRouter>

<Route exact path='/' component={App}/>
<Route exact path='/:id' component={Details}/>


</BrowserRouter>
  </div></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
