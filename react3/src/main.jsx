import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import App2 from './App2.jsx'
import App3 from './pages/App3.jsx'


import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import DemoSlice from './redux/DemoSclice'

let a = configureStore({
  reducer : DemoSlice
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <App2 /> */}
      <Provider store={a}>
            <App3 />

      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
