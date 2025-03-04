//onChang => pega todas os caracteres digitados no input.
// event.preventDefault => evitar que o formulário dê reload na tela.
//toast.warn deixa o alerta mais estilizado.

import { useState } from 'react'
import { toast } from 'react-toastify'
import { FormInput } from '../UI/FormInput'
import './style.css'

const defaultFormFields = {
	name: '',
	email: '',
	password: '',
	confirmPassword: ''
}

export function Register() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { name, email, password, confirmPassword } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

	const handleSubmit = (event) => {
    event.preventDefault()

	if (password !== confirmPassword) {
		toast.warn ('Senhas não conferem. Por favor, tente novamente.')
	}

		console.log(formFields)
		setFormFields(defaultFormFields)
	}

	return (
    <div className='sign-up-container'>
      <h2>Cadastre-se aqui</h2>
      <span>
        Para comprar e saber mais sobre nossos produtos, faça sua conta
        utilizando seu e-mail.
      </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          placeholder='Nome'
          value={name}
          name='name'
          onChange={handleChange}
        />
        <FormInput
          type='email'
          placeholder='E-mail'
          value={email}
          name='email'
          onChange={handleChange}
        />
        <FormInput
          type='password'
          placeholder='Senha'
          value={password}
          name='password'
          onChange={handleChange}
        />
        <FormInput
          type='password'
          placeholder='Confirme sua senha'
          value={confirmPassword}
          name='confirmPassword'
          onChange={handleChange}
        />
        <button className='buttons-container-registrer' type='submit'>
          Criar conta
        </button>
      </form>
    </div>
  )
}
