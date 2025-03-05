//o estilo sempre lê de cima para baixo.
//Toast Container é para estilizar os alertas da página.
//BrowserRouter => componenete de contexto. Tem funções e outros componentes dentro dele.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { GlobalStyle } from './Style/global.js'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Style/theme/default.js'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter} from 'react-router-dom'
import { CounterProvider } from './Context/CounterContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyle />
				<ToastContainer />
				<CounterProvider>
					<App />
				</CounterProvider>
			</ThemeProvider>
		</BrowserRouter>
  </StrictMode>
)
