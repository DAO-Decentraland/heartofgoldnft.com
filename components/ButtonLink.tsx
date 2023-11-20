import styled from "styled-components";
import {ReactNode} from "react";
import Link from "next/link"

interface ButtonLinkProps {
	className?: string
	children: ReactNode
	href: string
}

/**
 * AnchorLink Component
 * @constructor
 */
export default function ButtonLink({className, children, href}: ButtonLinkProps) {
	return (
		<Wrapper href={href} className={`button_link ${className ? className : ""}`}>
			{children} <img src="/pic/button-arrow.svg" alt="link arrow"/>
		</Wrapper>
	)
}

const Wrapper = styled(Link)`
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
