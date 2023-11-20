import styled from "styled-components";
import {ReactNode} from "react";

interface CenterBlockProps {
	className?: string
	width?: number | string
	children: ReactNode
}
export default function CenterBlock({className, width = 1200, children}: CenterBlockProps) {
	return (
		<Wrapper
			className={`center_block ${className ? className : ''}`}
			width={typeof width === "number" ? `${width}px` : width}
		>
			{children}
		</Wrapper>
	)
}

interface WrapperProps {
	width: number | string
}

const Wrapper = styled.div<WrapperProps>`
	max-width: ${p => p.width};
	width: calc(100% - 40px);
	margin: 0 auto;
	position: relative;
`
