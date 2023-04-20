import React from "react"

type InputProps = {
	label: string
	value: string
	onChange: (value: string) => void
	error?: string | null
}

export const Input: React.FC<InputProps> = ({
	label,
	value,
	onChange,
	error,
}) => (
	<div>
		<label>{label}</label>
		<input value={value} onChange={(e) => onChange(e.target.value)} />
		{error && <div>{error}</div>}
	</div>
)
