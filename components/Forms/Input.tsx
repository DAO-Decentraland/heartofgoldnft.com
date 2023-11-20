import styled from "styled-components";

interface InputProps {
	value: string
	onChange: (value: string) => void
	placeholder: string
	required?: boolean
	type?: "number" | "text" | "password" | "email"
	className?: string
	disabled?: boolean
}

/**
 * Input Component
 * @constructor
 */
export default function Input({value, onChange, placeholder, required = false, type = "text", className, disabled = false}: InputProps) {
	return (
		<Wrapper
			disabled={disabled}
			className={`form_input ${className ? className : ""}`}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
			required={required}
			type={type}
			onWheel={e => e.currentTarget.blur()}
		/>
	)
}

const Wrapper = styled.input`
  width: 100%;
	height: 70px;
  border: 1px solid #F6D595;
	padding: 0 20px;
  color: #FFF;
  font-size: 16px;
  &::-webkit-input-placeholder {color:#ebebeb;}
  &::-moz-placeholder          {color:#ebebeb;}/* Firefox 19+ */
  &:-moz-placeholder           {color:#ebebeb;}/* Firefox 18- */
  &:-ms-input-placeholder      {color:#ebebeb;}
`
