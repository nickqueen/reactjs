import './style.css'

export function FormInput({ label, ...otherProps }) {
	return (
		<div className='group'>
			<input {...otherProps} className='form-input' />
		</div>
	)
}
