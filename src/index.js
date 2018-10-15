import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={ store }>
   <App />
  </Provider>,
  document.getElementById('root'));


serviceWorker.unregister();
