//o estilo sempre lê de cima para baixo.
//Toast Container é para estilizar os alertas da página.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { GlobalStyle } from './Style/global.js'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Style/theme/default.js'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
		<ThemeProvider theme={defaultTheme}>
		<GlobalStyle />
		<ToastContainer />
    <App />
		</ThemeProvider>
  </StrictMode>
)
