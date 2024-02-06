import styled from "styled-components";
import {ReactNode} from "react";

interface ButtonProps {
	className?: string
	children: ReactNode
	onClick?: () => void
	disabled?: boolean
	type?: "submit" | "button"
}

/**
 * AnchorLink Component
 * @constructor
 */
export default function Button({className, children, onClick, disabled, type = "submit"}: ButtonProps) {
	return (
		<Wrapper type={type} disabled={disabled} onClick={onClick} className={`button ${className ? className : ""}`}>
			{children} <img src="/pic/button-arrow.svg" alt="link arrow"/>
		</Wrapper>
	)
}

const Wrapper = styled.button`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 100%;
  height: 70px;
  background: #EFBC6A;
  color: #080808;
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
	&:disabled{
		cursor: default;
		opacity: .4;
		&:hover{
			&:before{
				transform: translate(10px, 10px);
			}
		}
	}
	&:hover{
		&:before{
      transform: translate(0, 0);
      transition: all .3s ease-in-out;
		}
	}
	&:before{
		content: "";
    width: calc(100% - 2px);
		height: calc(100% - 2px);
		position: absolute;
    transform: translate(10px, 10px);
    border: 1px solid #EFBC6A;
    transition: all .3s ease-in-out;
	}
	img{
		margin-left: 10px;
	}
`
