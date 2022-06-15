import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './components/TodoItem'

import RoutesComponent from './components/RoutesComponent'

const root = ReactDOM.createRoot(
  document.getElementById('root'),
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <RoutesComponent />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
)
