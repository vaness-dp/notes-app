import { RegisterOptions, UseFormRegister } from 'react-hook-form'

export interface IFormField {
	type: string
	name: string
	errorMessage?: string
	label: string
	options?: RegisterOptions
	register: UseFormRegister<any>
}

export interface IFormInputs {
	name: string
	email: string
	password: string
}
