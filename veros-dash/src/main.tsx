import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { AlertProvider } from './common/alertcontext'
import { LoadingProvider } from './common/loadingcontext'
import './index.css'





ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoadingProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </LoadingProvider>
  </React.StrictMode>,
)
