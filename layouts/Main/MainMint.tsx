import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Button from "components/Button";
import whiteListImage from "public/pic/whitelist-decor.png"
import whiteListHand from "public/pic/whitelist-hand.png"
import Image from "next/image";
import { ConnectKitButton } from "connectkit";
import {useAccount} from "wagmi";
import { useSwitchChain } from 'wagmi'
import {useEffect, useState} from "react";
import axios from "axios";
import numberFormat from "helpers/numberFormat";
import ProgressBar from "components/ProgressBar";
import MintForm from "components/Forms/MintForm";

export default function MainMint() {
	const [total, setTotal] = useState(0)
	const account = useAccount()
	const {switchChain } = useSwitchChain()
	const [value, setValue] = useState(3)
	
	useEffect(() => {
		axios.get("/api/total").then(r => setTotal(r.data.data.total))
	}, []);
	
	return (
		<Wrapper id="white_list_form">
			<CenterBlock>
				<div className="left_image">
					<Image src={whiteListImage} width={268} alt="Join the Whitelist"/>
				</div>
				<div className="form_block">
					<Title><h2>MINTING<br/>IS NOW LIVE</h2></Title>
					<p className="price_mint">1 HoG NFT = 0,3 BNB</p>
					{process.env.TOTAL_TOKENS && (
						<p className="total_left">{numberFormat(+process.env.TOTAL_TOKENS - total)} left</p>
					)}
					<ProgressBar value={value} total={total} tokenPrice={0.3}/>
					{account.isConnected ? <MintForm value={value} onClick={(e) => setValue(e)}/> : null}
					<ConnectKitButton.Custom>
						{
							({isConnected, show }) => {
							return (
								isConnected ? (
									account.chainId === (process.env.MODE === "production" ? 56 : 97) ? (
										<Button onClick={show} className="wallet_button profile_button">Profile</Button>
										) : (
										<Button onClick={() => switchChain({chainId: process.env.MODE === "production" ? 56 : 97})} className="wallet_button profile_button">Switch network</Button>
									)
								) : (
									<Button onClick={show} className="wallet_button">Connect Wallet</Button>
								)
							)
						}
						}
					</ConnectKitButton.Custom>
					<span className="decor top"/>
					<span className="decor right"/>
					<span className="decor bottom"/>
					<span className="decor left"/>
				</div>
				<div className="right_image">
					<Image src={whiteListHand} width={554} alt="Be Whitelisted"/>
				</div>
				<span className="blur_round"/>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 260px;
	position: relative;
	@media only screen and (max-width: 1024px) {
		padding-top: 120px;
	}
	@media only screen and (max-width: 600px) {
		padding-top: 80px;
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
	.title{
		text-align: center;
	}
	.description{
		max-width: 410px;
		margin: 20px auto 0 auto;
		text-align: center;
    color: #FFF;
    font-size: 20px;
    font-weight: 300;
    line-height: 140%;
    @media only screen and (max-width: 600px) {
	    font-size: 14px;
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
      @media only screen and (max-width: 600px) {
	      left: 10px;
      }
		}
    &.right{
      right: 21px;
      top: 50%;
      transform: translateY(-50%);
      @media only screen and (max-width: 600px) {
        right: 10px;
      }
    }
	}
	.left_image{
		position: absolute;
		left: -80px;
		top: 0;
		z-index: 20;
    @media only screen and (max-width: 1024px) {
	    transform: scale(.8);
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
    @media only screen and (max-width: 1024px) {
	    transform: scale(.6);
	    right: -80px;
	    transform-origin: bottom right;
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
	.price_mint{
		margin-top: 40px;
		text-align: center;
		font-size: 20px;
		line-height: 100%;
		color: #FFFFFF;
	}
	.progress_bar{
		max-width: 350px;
		width: 100%;
	}
	.wallet_button{
		max-width: 350px;
		margin-top: 25px;
		&.profile_button{
			margin-top: 60px;
		}
	}
	.total_left{
		text-align: center;
		font-size: 32px;
		font-weight: 300;
		line-height: 100%;
		margin-top: 15px;
	}
`
