import { useAuthPage } from '@/hooks/useAuthPage'

import { IAuth } from '@/types/auth.types'

import { Button } from '../Button'
import { FormField } from '../FormField'

import './RegisterForm.css'

export const RegisterForm = ({ isLogin }: IAuth) => {
	const { register, handleSubmit, onSubmit, errors, isPending } = useAuthPage({
		isLogin
	})
	return (
		<form
			className='register-form'
			onSubmit={handleSubmit(onSubmit)}
		>
			<FormField
				label='Username'
				type='text'
				name='username'
				register={register}
				errorMessage={errors?.username?.message}
				options={{
					required: 'Username is required'
				}}
			/>

			<FormField
				label='Email'
				type='email'
				name='email'
				register={register}
				errorMessage={errors?.email?.message}
				options={{
					required: 'Email is required'
				}}
			/>

			<FormField
				label='Password'
				type='password'
				name='password'
				register={register}
				errorMessage={errors?.password?.message}
				options={{
					required: 'Password is required'
				}}
			/>
			<Button
				isLogin={isLogin}
				isPending={isPending}
			>
				Sign Up
			</Button>
		</form>
	)
}
