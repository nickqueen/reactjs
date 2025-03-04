//inserir com valores: value= {''} onChange={ () => ()}
// const [formFilds, setFormFilds] = useState() => é um array
//base para criação de formulário

import { useState } from 'react';
import { FormInput } from '../UI/FormInput';
import './style.css';
import { confirmPasswordReset } from 'firebase/auth';
import { createAuthUserWithEmailPassword } from '../../utils/firebase';


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

  const handleSubmit = (event) => {
    event.preventDefault()

		if (password !== confirmPassword) {
			toast.warn('Senhas não correspondem. Tente novamente.')
			return
		}

		try {
			const { user } = createAuthUserWithEmailPassword(email, password)
			console.log ('User')
			setFormFields(defaultFormFields)

		} catch (error) {
		console.log(error)
		}
  }

  return (
    <div className='login-container'>
      <h2> Entre na sua conta. </h2>
      <span> Utilizando login e senha cadastrados, acesse sua conta.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          required
          placeholder='E-mail'
          name='email'
          value={email}
          onChange={handleChange}
        />
        <FormInput
          type='password'
          required
          placeholder='Senha'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </form>

      <div className='buttons-container'>
        <button className='buttons-container-login' type='submit'> Entrar </button>
        <button className='buttons-container-login'> Entrar conta Gmail </button>
      </div>
    </div>
  )
}
