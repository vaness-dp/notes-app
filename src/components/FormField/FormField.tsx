import { FC } from 'react'
import { IFormField } from '../../types/field.types'
import './FormField.css'

export const FormField: FC<IFormField> = ({
	label,
	type,
	register,
	name,
	errorMessage,
	options,
}) => {
	return (
		<label className='form-field'>
			<span className='form-field__label'>{label}</span>
			<input type={type} {...register(name, options)} />

			{errorMessage && (
				<span className='form-field__error-text'>{errorMessage}</span>
			)}
		</label>
	)
}
