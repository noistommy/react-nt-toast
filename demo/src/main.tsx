import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'react-be-ui/react-be-ui.css'
import App from './App.tsx'

import { ToastProvider } from '../../src/index.tsx'
import '../../src/toast.scss'

const defaultToastOptions = {
  useTitle: true,
  useIcon: true,
  round: false,
  closeButton: true,
  clickToClose: true,
  displayOnTop: false,
  snackbar: false,
  freeze: false,
  timeout: 5000,
  theme: '', // 'light', 'icon', 'icon-bg', 'line'
  position: 'bottom-right' // 'top-left', 'top-center', 'top-right', etc.
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider defaultOptions={defaultToastOptions}>
      <App />
    </ToastProvider>
  </StrictMode>,
)
