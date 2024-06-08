import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'

import authService from '../services/auth.service'
import { IAuth, IAuthFormLogin, IAuthFormRegister } from '../types/auth.types'

export const useAuthPage = ({ isLogin }: IAuth) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IAuthFormRegister>()

	const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IAuthFormLogin) => authService.login(data),
		onSuccess(data) {
			localStorage.setItem('token', data.accessToken)
			reset()
			window.history.pushState({}, '', '/')
		}
	})

	const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
		mutationKey: ['register'],
		mutationFn: (data: IAuthFormRegister) => authService.register(data),
		onSuccess(data) {
			localStorage.setItem('token', data.accessToken)
			reset()
			window.history.pushState({}, '', '/')
		}
	})

	const isPending = isLoginPending || isRegisterPending

	const onSubmit: SubmitHandler<IAuthFormRegister> = data => {
		isLogin ? mutateLogin(data) : mutateRegister(data)
	}

	return { register, handleSubmit, onSubmit, errors, isPending }
}
