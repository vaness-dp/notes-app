import cn from 'clsx'
import { FC, HTMLAttributes } from 'react'

import './Button.css'

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	isDisabled?: boolean
	isLogin: boolean
	isPending?: boolean
	kind?: 'primary' | 'secondary'
	type?: 'submit' | 'reset' | 'button'
}

export const Button: FC<IButtonProps> = ({
	isLoading,
	isLogin,
	isPending,
	children,
	className,
	kind = 'primary',
	type,
	...props
}) => {
	return (
		<button
			disabled={isPending}
			type={type}
			className={cn('button', isPending ? 'disabled' : '')}
			data-kind={kind}
			{...props}
		>
			{children}
		</button>
	)
}
