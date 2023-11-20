import styled from "styled-components";
import {ReactNode} from "react";
import Image from "next/image"
import CenterBlock from "helpers/CenterBlock";
import mainImage from "public/pic/error-hand.png"

interface ErrorLayoutProps {
	image: string
	children: ReactNode
	title?: string
	alt: string
}

/**
 * ErrorLayout Component
 * @constructor
 */
export default function ErrorLayout({image, children, title, alt}: ErrorLayoutProps) {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="image">
					<Image src={image} width={523} height={220} priority={true} alt={alt}/>
				</div>
				<div className="content">
					{title && <h1>{title}</h1>}
					{children}
				</div>
				<div className="hand">
					<Image src={mainImage} width={811} priority={true} alt="Error hand"/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	height: calc(100vh - 300px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	position: relative;
	.content {
		margin-top: 25px;
		p {
			font-weight: 300;
			font-size: 20px;
			line-height: 160%;
			color: #FFFFFF;
		}
		a {
			color: #F9B95A;
			text-decoration: underline;
			font-weight: 500;
		}
	}
	.image {
		display: flex;
		justify-content: center;
	}
	.hand {
		position: absolute;
		bottom: -400px;
		left: 50%;
		transform: translateX(-50%);
	}
	h1 {
		font-family: 'Graphik', sans-serif;
		font-weight: 500;
		font-size: 30px;
		line-height: 160%;
		text-align: center;
	}
`
