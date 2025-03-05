//inserir com valores: value= {''} onChange={ () => ()}
// const [formFilds, setFormFilds] = useState() => é um array
//base para criação de formulário

import { useState } from 'react';
import { FormInput } from '../UI/FormInput';
import './style.css';
import {
	signInAuthUserWithEmailPassword,
	signInWithGooglePopup
} from '../../utils/firebase'
import { toast } from 'react-toastify'


const defaultFormFields = {
  email: '',
  password: ''
}

export function LoginPage () {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
		event.preventDefault()

		try {
			await signInAuthUserWithEmailPassword(email, password)
			toast.success('Login efetuado com sucesso!')
		} catch (error) {
			if (error.code === 'auth/invalid-credential') {
				toast.error('E-mail ou senha invalidos')
			}
		}

		resetFormFields()
	}

	const signInWithGoogle = async () => {
		await signInWithGooglePopup()
	}

	const resetFormFields = () => {
		setFormFields(defaultFormFields)
	}

	return (
		<div className='login-container'>
			<h2>Já possui conta?</h2>
			<span>Faça o login utilizando seu e-mail e senha</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='E-mail'
					placeholder='E-mail'
					type='email'
					requerid
					onChange={handleChange}
					name='email'
					value={email}
				/>
				<FormInput
					label='Senha'
					placeholder='Senha'
					type='password'
					requerid
					onChange={handleChange}
					name='password'
					value={password}
				/>

				<div className='buttons-container'>
					<button className='buttons-container-login' type='submit'>
						Login
					</button>
					<button
						type='button'
						onClick={signInWithGooglePopup}
						className='buttons-container-login'
					>
						Acesse com o Google
					</button>
				</div>
			</form>
		</div>
	)
}
