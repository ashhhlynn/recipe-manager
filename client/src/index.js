import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './components/reducers/rootReducer'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk))  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(  
  <Provider store={store}>
    <App />
  </Provider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
