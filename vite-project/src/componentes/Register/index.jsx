//onChang => pega todas os caracteres digitados no input.
// event.preventDefault => evitar que o formulário dê reload na tela.

import { useState } from 'react'

const defaultFormFilds = {
	name: '',
	email: '',
	password: '',
	confirmPassword: ''
}

export function Register() {
	const [formFilds, setFormFilds] = useState(defaultFormFilds)

	const {name, email, password, confirmPassword}= formFilds

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormFilds({ ...formFilds, [name]: value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (password !== confirmPassword) {
			alert('Senhas não conferem. Por favor, tente novamente.')
		}

		console.log(formFilds)
		setFormFilds(defaultFormFilds)
	}

	return (
		<>
		<h2> Cadastre-se aqui </h2>
		<form onSubmit = {handleSubmit}>
		<input type='text' placeholder='Digite seu nome' value= {name} name='name' onChange={handleChange} />
		<input type='email' placeholder='Digite seu e-mail' value= {email} name='email' onChange={handleChange} />
		<input type='password' placeholder='Digite sua senha' value= {password} name='password' onChange={handleChange} />
		<input type='password' placeholder='Confirme sua senha' value= {confirmPassword} name='confirmPassword' onChange={handleChange} />
		<button type='submit'> Criar conta </button>
		</form>

		</>
	)
}
