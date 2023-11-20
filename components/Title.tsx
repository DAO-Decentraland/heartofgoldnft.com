import styled from "styled-components";
import {ReactNode} from "react";

interface TitleProps {
	className?: string
	children: ReactNode
}

/**
 * Title Component
 * @constructor
 */
export default function Title({className, children}: TitleProps) {
	return (
		<Wrapper className={`title ${className ? className : ""}`}>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
  width: 100%;
  font-family: "BoogyBrutPoster-White", sans-serif;
  text-transform: uppercase;
  h1, h2 {
    font-weight: 100;
    line-height: 100%;
  }
	h1{
    font-size: 82px;
    letter-spacing: 4.1px;
	}
	h2{
    color: #FFF;
    font-size: 82px;
	}
	h3{
    font-size: 35px;
    letter-spacing: 1.5px;
		line-height: 1.3;
	}
	h4{
		
	}
`
