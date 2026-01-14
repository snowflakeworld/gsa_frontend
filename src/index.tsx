import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { StyledEngineProvider } from '@mui/material'

import App from './App'
import { AppTheme } from './theme/AppTheme'

import '@qpokychuk/sf-pro-display/index.css'
import './index.scss'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <AppTheme>
        <App />
      </AppTheme>
    </StyledEngineProvider>
  </StrictMode>
)
