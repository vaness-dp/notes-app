import {
	IAuthFormLogin,
	IAuthFormRegister,
	IAuthResponse,
	IUser
} from '@/types/auth.types'

import { getContentType } from '../api/api.helpers'

import { API_URL } from '@/constants/constants'

class AuthService {
	async login(data: IAuthFormLogin): Promise<IAuthResponse> {
		const response = await fetch(`api/login`, {
			method: 'POST',
			headers: getContentType(),
			body: JSON.stringify(data)
		})

		if (!response.ok) {
			throw new Error('Error executing request')
		}

		const responseData: IAuthResponse = await response.json()
		return responseData
	}

	async register(data: IAuthFormRegister): Promise<IAuthResponse> {
		const response = await fetch(`api/register`, {
			method: 'POST',
			headers: getContentType(),
			body: JSON.stringify(data)
		})

		if (!response.ok) {
			throw new Error('Error executing request')
		}

		const responseData: IAuthResponse = await response.json()
		return responseData
	}

	async profile(): Promise<IUser> {
		const token = localStorage.getItem('token')

		const response = await fetch(`${API_URL}/users/me`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})

		if (!response.ok) {
			throw new Error('Error executing request')
		}

		const responseData: IUser = await response.json()
		return responseData
	}

	async users(): Promise<IUser[]> {
		const token = localStorage.getItem('token')

		const response = await fetch(`${API_URL}/users`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		})

		if (!response.ok) {
			throw new Error('Error executing request')
		}

		const responseData: IUser[] = await response.json()
		return responseData
	}
}

export default new AuthService()
