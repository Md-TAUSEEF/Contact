import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from '../Components/StoreToken/StoreToken.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <AuthProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </AuthProvider>
)
