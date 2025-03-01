import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { GlobalStyle } from './Style/global.js'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Style/theme/default.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
		<ThemeProvider theme={defaultTheme}>
		<GlobalStyle />
    <App />
		</ThemeProvider>
  </StrictMode>
)
