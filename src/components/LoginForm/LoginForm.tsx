import { useAuthPage } from '@/hooks/useAuthPage'

import { IAuth } from '@/types/auth.types'

import { Button } from '../Button'
import { FormField } from '../FormField'

import './LoginForm.css'

export const LoginForm = ({ isLogin }: IAuth) => {
	const { register, handleSubmit, onSubmit, errors, isPending } = useAuthPage({
		isLogin
	})
	return (
		<form
			className='login-form'
			onSubmit={handleSubmit(onSubmit)}
		>
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
				Sign In
			</Button>
		</form>
	)
}
