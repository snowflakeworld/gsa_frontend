import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { StyledEngineProvider } from '@mui/material'

import App from './App'
import { AppTheme } from './theme/AppTheme'

import '@qpokychuk/sf-pro-display/index.css'
import DialogsProvider from './hooks/useDialogs/DialogsProvider'
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
        <DialogsProvider>
          <App />
        </DialogsProvider>
      </AppTheme>
    </StyledEngineProvider>
  </StrictMode>
)
