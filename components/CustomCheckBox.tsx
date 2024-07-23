import styled from "styled-components";
import {ReactNode} from "react";

interface CustomCheckBoxProps {
	checked: boolean
	onClick: (value: boolean) => void
	children: ReactNode
	className?: string
}

export default function CustomCheckBox({checked, onClick, children, className}: CustomCheckBoxProps) {
	return (
		<Wrapper className={`custom_checkbox ${className ? className : ""}`}>
			<span onClick={() => onClick(!checked)} className={checked ? "checked" : ""}/>
			<p>{children}</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	span{
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #FFFFFF;
		cursor: pointer;
		&.checked:before{
			background: #FFFFFF;
			transition: all .3s ease-in-out;
		}
		&:before{
			content: "";
			width: 12px;
			height: 12px;
			background: transparent;
			transition: all .3s ease-in-out;
		}
	}
	p{
		width: calc(100% - 20px);
		padding-left: 10px;
		color: #FFF;
		font-size: 12px;
		font-weight: 500;
		line-height: 100%;
	}
	a{
		text-decoration: underline;
	}
`
