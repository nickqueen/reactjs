//onChang => pega todas os caracteres digitados no input.
// event.preventDefault => evitar que o formulário dê reload na tela.
//toast.warn deixa o alerta mais estilizado.

import { useState } from 'react'
import { toast } from 'react-toastify'
import { FormInput } from '../UI/FormInput'

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
			toast.warn ('Senhas não conferem. Por favor, tente novamente.')
		}

		console.log(formFilds)
		setFormFilds(defaultFormFilds)
	}

	return (
		<>
		<h2> Cadastre-se aqui </h2>
		<form onSubmit = {handleSubmit}>

			<FormInput label='Nome' type='text' placeholder='Digite seu nome' value= {name} name='name' onChange={handleChange}/>
			<FormInput label='E-mail' type='email' placeholder='Digite seu e-mail' value= {email} name='email' onChange={handleChange} />
			<FormInput label='Senha' type='password' placeholder='Digite sua senha' value= {password} name='password' onChange={handleChange} />
			<FormInput label='Confirmar senha' type='password' placeholder='Confirme sua senha' value= {confirmPassword} name='confirmPassword' onChange={handleChange} />
			<button type='submit'> Criar conta </button>
		</form>

		</>
	)
}
