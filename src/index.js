import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App2 from './App';
import store from './store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App2 />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);