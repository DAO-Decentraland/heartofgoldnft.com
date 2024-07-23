import Seo from "helpers/Seo";
import styled from "styled-components";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import CenterBlock from "helpers/CenterBlock";
import Image from "next/image";
import CustomCheckBox from "components/CustomCheckBox";
import airDropImage1 from "public/pic/airdrop/airdrop-1.png"
import airDropImage2 from "public/pic/airdrop/airdrop-2.png"
import airDropImage3 from "public/pic/airdrop/airdrop-3.png"
import airDropImage4 from "public/pic/airdrop/airdrop-4.png"
import airDropImage5 from "public/pic/airdrop/airdrop-5.png"
import Link from "next/link";
import {useAccount, useDisconnect} from "wagmi";
import ConnectWalletButtonAirdrop from "components/ConnectWalletButtonAirdrop";

export default function Airdrop(){
	const {query} = useRouter()
	const [approve, setApprove] = useState(false)
	const [walletAddress, setWalletAddress] = useState<null | string>(null)
	const { disconnect } = useDisconnect()
	const {address} = useAccount()

	useEffect(() => {
		if (query.id) makeRequest()
	}, [query])

	const makeRequest = () => {
		if (query.id) {
			axios.get("/api/airdrop", {params: {id: query.id}})
				.then(r => {
					if (r.data.data.data) {
						setWalletAddress(r.data.data.data.walletAddress)
						if (r.data.data.data.walletAddress) setApprove(true)
					} else setApprove(false)
				})
		}
	}

	return (
		<>
			<Seo
				title="Airdrop"
				description="How to claim your $HOG airdrop"
			/>
			<main>
				<Wrapper>
					<CenterBlock width={580}>
						<div className="content_block">
							<div className="heading">
								<img width={138} src="/pic/logo.svg" alt="HoG"/>
								<p>Airdrop</p>
							</div>
							<p className="description">How to claim your $HOG airdrop</p>
							<div className="list">
								<div style={{background: "#937444"}} className="item">
									<div className="content">
										<h3>1. Accept Terms & Conditions</h3>
										<CustomCheckBox checked={approve} onClick={setApprove}>I Accept <a href="#" target="_blank" rel="noreferrer">Terms & Conditions</a></CustomCheckBox>
									</div>
									<Image width={160} src={airDropImage1} alt="Accept Terms & Conditions"/>
								</div>
								<div style={{background: "#303030"}} className="item">
									<div className="content">
										<h3>2. Connect Wallet</h3>
										<ConnectWalletButtonAirdrop approve={approve} walletAddress={walletAddress} onCallBack={makeRequest}></ConnectWalletButtonAirdrop>
										<p className="connect_wallet_description">Ensure terms are accepted before connecting</p>
									</div>
									<Image width={160} src={airDropImage2} alt="Connect Wallet"/>
								</div>
								<div style={{background: "#625144"}} className="item">
									<div className="content">
										<h3>3. Chat with Deus</h3>
										<div className="chat_block">
											<img src="/pic/link-icon.svg" alt="Chat"/>
											<p className="chat_link">Chat with <a href="#" rel="noreferrer">Deus Ex Machina on Telegram</a> for additional rewards</p>
										</div>
									</div>
									<Image width={160} src={airDropImage3} alt="Chat with Deus"/>
								</div>
								<div style={{background: "#93523D"}} className="item">
									<div className="content">
										<h3>4. Expect the airdrop</h3>
										<p className="expect_description">In Q4 2024</p>
									</div>
									<Image width={160} src={airDropImage4} alt="Expect the airdrop"/>
								</div>
								<div style={{background: "#747474"}} className="item">
									<div className="content">
										<h3>5. Join the $HOG Pre-Sale 🔥</h3>
										<Link className="learn_link" href={`/airdrop/terms?id=${query.id}`}>Learn more</Link>
									</div>
									<Image width={160} src={airDropImage5} alt="Join the $HOG Pre-Sale"/>
								</div>
							</div>
							{address ? (
								<button onClick={() => {
									disconnect()
									setApprove(false)
								}} className="disconnect_wallet">Disconnect Wallet</button>
							) : null}
						</div>
					</CenterBlock>
				</Wrapper>
			</main>
		</>
	)
}

const Wrapper = styled.section`
	position: relative;
	padding: 80px 0;
	background: url("/pic/airdrop-image.jpg") center no-repeat fixed;
	background-size: cover;
	@media only screen and (max-width: 600px) {
		padding: 0;
	}
	.center_block{
		@media only screen and (max-width: 600px) {
			width: 100%;
		}
	}
	.content_block{
		border-radius: 32px;
		background: rgba(13, 13, 13, 0.70);
		backdrop-filter: blur(5px);
		padding: 68px;
		@media only screen and (max-width: 600px) {
			padding: 40px 20px;
			border-radius: 0;
		}
	}
	.heading{
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		p{
			color: #FFF;
			font-size: 41px;
			font-weight: 600;
			line-height: 100%;
			@media only screen and (max-width: 600px) {
				font-size: 20px;
			}
		}
		img{
			margin-right: 25px;
			@media only screen and (max-width: 600px) {
				width: 50px;
				margin-right: 10px;
			}
		}
	}
	.description{
		color: #EFBC6A;
		text-align: center;
		font-size: 22px;
		line-height: 120%;
		max-width: 234px;
		width: 100%;
		margin: 48px auto 0 auto;
		@media only screen and (max-width: 600px) {
			margin-top: 34px;
		}
	}
	.list{
		margin-top: 48px;
		@media only screen and (max-width: 600px) {
			margin-top: 30px;
		}
	}
	.item{
		border-radius: 20px;
		padding: 10px 20px;
		margin-bottom: 14px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media only screen and (max-width: 600px) {
			border-radius: 14px;
			height: 120px;
			img{
				position: absolute;
				right: 20px;
				opacity: .4;
			}
		}
		&:last-child{
			margin-bottom: 0;
		}
	}
	h3{
		font-size: 18px;
		line-height: 120%;
		font-weight: 400;
	}
	.custom_checkbox{
		margin-top: 46px;
		a{
			display: block;
		}
	}
	.content{
		width: calc(100% - 160px);
		@media only screen and (max-width: 600px) {
			width: 100%;
			position: relative;
			z-index: 10;
		}
	}
	.expect_description{
		font-size: 12px;
		font-weight: 500;
		line-height: 120%;
		margin-top: 56px;
	}
	.learn_link{
		font-size: 12px;
		font-weight: 500;
		line-height: 120%;
		margin-top: 56px;
		display: block;
		text-decoration: underline;
	}
	.chat_block{
		margin-top: 21px;
		max-width: 190px;
		width: 100%;
	}
	.chat_link{
		font-size: 12px;
		font-weight: 500;
		line-height: 120%;
		a{
			text-decoration: underline;
		}
	}
	.connect_wallet_description{
		font-size: 12px;
		font-weight: 500;
		line-height: 120%;
		margin-top: 22px;
		max-width: 180px;
		width: 100%;
	}
	.connect_wallet_button{
		margin-top: 8px;
	}
	.disconnect_wallet{
		margin: 24px auto 0 auto;
		border-radius: 10px;
		background: #EFBC6A;
		color: #1D1D1D;
		font-size: 16px;
		font-weight: 500;
		line-height: 120%;
		height: 44px;
		padding: 0 30px;
	}
`
