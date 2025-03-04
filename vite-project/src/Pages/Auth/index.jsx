//chamar cadastro e login

import { LoginPage } from '../../Componentes/LoginPage'
import { Register } from '../../Componentes/Register'
import './style.css'

export function Auth() {
	return (
		<div className='auth-container'>
		<LoginPage />
		<Register />
		</div>
	)
}

