import styled from "styled-components";
import {ReactNode} from "react";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import whiteListImage from "public/pic/whitelist-decor.png";
import whiteListHand from "public/pic/whitelist-hand.png";
import Responsive from "helpers/Responsive";

interface MintWhiteListWrapperProps {
	children: ReactNode
}

/**
 * MintWhiteListWrapper Component
 * @constructor
 */
export default function MintWhiteListWrapper({children}: MintWhiteListWrapperProps) {

	const LeftImage = () => {
		return (
			<div className="left_image">
				<Image src={whiteListImage} width={268} alt="Join the Whitelist"/>
			</div>
		)
	}

	const RightImage = () => {
		return (
			<div className="right_image">
				<Image src={whiteListHand} width={554} alt="Be Whitelisted"/>
			</div>
		)
	}

	return (
		<Wrapper id="mint_block">
			<Responsive width={1730} mobile={<LeftImage/>}/>
			<CenterBlock>
				<Responsive width={1730}>
					<LeftImage/>
				</Responsive>
				<div className="form_block">
					{children}
					<span className="decor top"/>
					<span className="decor right"/>
					<span className="decor bottom"/>
					<span className="decor left"/>
				</div>
				<Responsive width={1730}>
					<RightImage/>
				</Responsive>
				<span className="blur_round"/>
			</CenterBlock>
			<Responsive width={1730} mobile={<RightImage/>}/>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 260px;
	position: relative;
	@media only screen and (max-width: 1730px) {
		padding-top: 0;
		margin-top: 260px;
	}
	@media only screen and (max-width: 1024px) {
		margin-top: 120px;
	}
	@media only screen and (max-width: 600px) {
		margin-top: 80px;
		margin-left: -20px;
		margin-right: -20px;
	}
	.form_block{
		width: 760px;
		height: 740px;
		border-radius: 30px;
		background: #0D0D0D;
		padding: 30px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 10;
		@media only screen and (max-width: 820px) {
			width: 100%;
		}
		@media only screen and (max-width: 600px) {
			height: auto;
			padding: 50px 50px 80px 50px;
		}
		&:before{
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 20px;
			border: 1px solid #B29E77;
			width: 696px;
			height: 675px;
			@media only screen and (max-width: 820px) {
				width: calc(100% - 40px);
			}
			@media only screen and (max-width: 600px) {
				height: calc(100% - 40px);
			}
		}
	}
	.decor{
		position: absolute;
		&:before{
			content: url("/pic/form-decor.svg");
		}
		&.top{
			top: 20px;
			left: 50%;
			transform: translateX(-50%);
			@media only screen and (max-width: 600px) {
				top: 7px;
			}
		}
		&.bottom{
			bottom: 10px;
			left: 50%;
			transform: translateX(-50%);
			@media only screen and (max-width: 600px) {
				bottom: -2px;
			}
		}
		&.left{
			left: 21px;
			top: 50%;
			transform: translateY(-50%);
			@media only screen and (max-width: 820px) {
				left: 10px;
			}
		}
		&.right{
			right: 21px;
			top: 50%;
			transform: translateY(-50%);
			@media only screen and (max-width: 820px) {
				right: 10px;
			}
		}
	}
	.left_image{
		position: absolute;
		left: -80px;
		top: 0;
		z-index: 20;
		@media only screen and (max-width: 1730px) {
			left: 0;
			transform: scale(.8);
			transform-origin: left center;
		}
		@media only screen and (max-width: 820px) {
			transform: scale(.6);
		}
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
	.right_image{
		position: absolute;
		right: -200px;
		bottom: 0;
		z-index: 20;
		@media only screen and (max-width: 1730px) {
			right: -30px;
			transform: scale(.8);
			transform-origin: right center;
		}
		@media only screen and (max-width: 820px) {
			transform: scale(.5);
		}
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
	.blur_round{
		border-radius: 50%;
		background: #FBBF60;
		filter: blur(140px);
		width: 400px;
		height: 400px;
		position: absolute;
		right: -200px;
		bottom: -100px;
	}
`
