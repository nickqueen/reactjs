import React from 'react'
import { Header } from './componentes/Header/index'
import { Auth } from './Pages/Auth'
import { Home } from './Pages/Home'
import { Shop } from './Pages/Shop'
import { Route, Routes } from 'react-router-dom'


export function App() {
	return (
		<Routes>
			<Route path='/' element={<Header />}>
				<Route index element={<Home />} />
				<Route path='auth' element={<Auth />} />
				<Route path='shop' element={ <Shop />} />
		</Route>
		</Routes>
	)
}
