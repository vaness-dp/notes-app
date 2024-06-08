export interface IAuth {
	isLogin: boolean
	isPending?: boolean
}

export interface IUser {
	id: string
	username: string
	email: string
}

export interface IAuthFormRegister extends Pick<IUser, 'email' | 'username'> {
	password: string
}

export interface IAuthFormLogin extends Pick<IUser, 'email'> {
	password: string
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}
