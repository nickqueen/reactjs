//onChang => pega todas os caracteres digitados no input.
// event.preventDefault => evitar que o formulário dê reload na tela.
//toast.warn deixa o alerta mais estilizado.

import { useState } from 'react'
import { toast } from 'react-toastify'
import { FormInput } from '../UI/FormInput'
import './style.css'
import {
	createAuthUserWithEmailPassword,
	createUserDocumentFromAuth
} from '../../utils/firebase'


const defaultFormFields = {
	name: '',
	email: '',
	password: '',
	confirmPassword: ''
}

export function Register() {
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { name, email, password, confirmePassword } = formFields

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormFields({ ...formFields, [name]: value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (password !== confirmePassword) {
			toast.warn('Senhas não são iguais.')
			return
		}

		try {
			const { user } = await createAuthUserWithEmailPassword(email, password)
			await createUserDocumentFromAuth(user, { name })
			toast.success('Usuário cadastrado com sucesso!')
			setFormFields(defaultFormFields)
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				toast.error('E-mail já cadastrado.')
			}
		}
	}

	return (
		<div className="sign-up-container">
			<h2> Cadastre-se </h2>
			<span> Para realizar sua compra é necessário cadastrar um usuário, utilizando e-mail e senha. </span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Nome"
					type="text"
					placeholder="Digite seu nome"
					value={name}
					name="name"
					onChange={handleChange}
				/>
				<FormInput
					label="Email"
					type="email"
					placeholder="Digite seu e-mail"
					value={email}
					name="email"
					onChange={handleChange}
				/>
				<FormInput
					type="password"
					placeholder="Digite uma senha"
					value={password}
					name="password"
					onChange={handleChange}
					label="Senha"
				/>
				<FormInput
					type="password"
					placeholder="Confirme sua senha"
					value={confirmePassword}
					name="confirmePassword"
					onChange={handleChange}
					label="Confirme sua senha"
				/>

				<button className="buttons-container-registrer" type="submit">
						Criar minha conta
					</button>
			</form>
		</div>
	)
}
