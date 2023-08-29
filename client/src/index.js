import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './components/reducers/rootReducer'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk))  
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(  
  <Provider store={store}>
    <App />
  </Provider>
)

reportWebVitals()
