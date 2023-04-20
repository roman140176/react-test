import React, { useState } from "react"
import { Input } from "../components/Input/Input"
import { register, Params } from "./api"

export const Home = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [errors, setErrors] = useState<{ [key: string]: string }>({})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)
		setErrors({})

		try {
			await register({ name, email, password })
		} catch (err) {
			const { errors: apiErrors } = JSON.parse(err.message)
			const formattedErrors = apiErrors.reduce(
				(acc: { [key: string]: string }, error: any) => {
					if (error.field in acc) {
						acc[error.field] += `, ${error.message}`
					} else {
						acc[error.field] = error.message
					}
					return acc
				},
				{}
			)
			setErrors(formattedErrors)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<Input
				label="Имя"
				value={name}
				onChange={setName}
				error={errors.name || null}
			/>
			<Input
				label="Email"
				value={email}
				onChange={setEmail}
				error={errors.email || null}
			/>
			<Input
				label="Пароль"
				value={password}
				onChange={setPassword}
				error={errors.password || null}
			/>
			<button type="submit" disabled={isLoading}>
				Зарегистрироваться
			</button>
		</form>
	)
}
