import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import CartSlice from './redux/CartSlice'
import DemoSlice from './redux/DemoSlice'
import UserAuthSlice from './redux/UserAuthSlice'

let AllSlice = combineReducers({CartSlice, DemoSlice, UserAuthSlice})

let store = configureStore({reducer:AllSlice})


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
  </BrowserRouter>
  </StrictMode>,
)
