import Seo from "helpers/Seo";
import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import ConnectWalletButtonAirdrop from "components/ConnectWalletButtonAirdrop";
import CustomCheckBox from "components/CustomCheckBox";
import Link from "next/link";

export default function Wallet(){
	const {query} = useRouter()
	const [approve, setApprove] = useState(false)
	const [walletAddress, setWalletAddress] = useState<null | string>(null)
	const [error, setError] = useState(false)

	useEffect(() => {
		if (query.id) {
			makeRequest()
		} else setError(true)
	}, [query])

	const makeRequest = () => {
		if (query.id) {
			setError(false)
			axios.get("/api/wallet", {params: {id: query.id}})
				.then(r => {
					if (r.data.data.data) {
						setWalletAddress(r.data.data.data.walletAddress)
						if (r.data.data.data.walletAddress) setApprove(true)
					} else {
						setApprove(false)
						setError(true)
					}
				})
		}
	}

	return (
		<>
			<Seo
				title="Connect Wallet"
				description="Empower your unstoppable winning streak in our groundbreaking NFT Collection, where GAMEFi meets Play-to-Earn at the ultimate crossroads."
				image="/pic/og.jpg"
			/>
			<Wrapper>
				<section>
					<CenterBlock width={600}>
						<div className="logo">
							<img src="/pic/logo.svg" alt="HoG"/>
						</div>
						{
							!error ? (
								<>
									<h1>Connect Wallet</h1>
									<div className="agree_block">
										<CustomCheckBox
											checked={approve}
											onClick={setApprove}>
											I Accept <Link href={`/airdrop/terms?id=${query.id}`}>Terms & Conditions</Link>
										</CustomCheckBox>
									</div>
									<ConnectWalletButtonAirdrop
										approve={approve}
										walletAddress={walletAddress}
										onCallBack={makeRequest}
									></ConnectWalletButtonAirdrop>
									{walletAddress ? (
										<div className="redirect_link">
											<a href="https://t.me/Deus_game_bot">Back to game</a>
										</div>
									) : null}
									<p className="connect_wallet_description">Ensure terms are accepted before connecting</p>
									<div className="terms_content">
										<h2>Legal Disclaimer</h2>
										<p>The following Terms & Conditions apply to the Heart of Gold Airdrop campaign. By participating in this campaign, you agree to these Terms:</p>
										<p><strong>Eligibility</strong> This campaign is not open to individuals who are citizens or residents of the United States, Canada, Tunisia, Qatar, Nepal, Morocco, Iraq, Egypt, China, Bangladesh, and Algeria. Any participation from these regions will result in immediate disqualification.</p>
										<p><strong>Know Your Customer (KYC) Requirements</strong> To receive rewards, all eligible participants must complete a KYC verification process. This process requires the provision of valid identification and accurate contact information.</p>
										<p><strong>Disqualification</strong> We reserve the right to disqualify any participant found to be engaging in fraudulent activities or behaviors that compromise the integrity of the campaign. This includes, but is not limited to, the use of automated bots, the creation of fake accounts, or the submission of false entries.</p>
										<p><strong>Claiming Rewards</strong> To claim your reward:</p>
										<ol>
											<li>Check if your wallet is listed among the winners.</li>
											<li>Create an account at heartofgoldnft.com.</li>
											<li>Complete the KYC process within 7 days of being announced as a winner to maintain your eligibility.</li>
										</ol>
										<p><strong>Reward Distribution</strong> Rewards will be distributed to the wallets of participants who have successfully passed the KYC verification in Q4 2024.</p>
										<p><strong>Additional Activities</strong> Participants can interact with Deus ex Machina through our Telegram bot for various activities such as mining xHOG, extending mining periods, and other interactive features to increase reward opportunities.</p>
										<p>By participating, you acknowledge and agree to these terms and conditions, confirming your full compliance with the rules and your understanding of all campaign mechanisms.</p>
									</div>
								</>
							) : (
								<>
									<h1>Wallet Connection Error</h1>
									<p className="connect_wallet_description">It looks like you’re trying to connect your wallet, but we couldn’t find your account in the system. Please click “Back to Game” and then try clicking <strong>“Connect Wallet”</strong> again.
									</p>
									<div className="back_link">
										<a href="https://t.me/Deus_game_bot">Back to game</a>
									</div>
								</>
							)
						}
					</CenterBlock>
				</section>
				<span className="glow"/>
			</Wrapper>
		</>
	)
}

const Wrapper = styled.main`
	background: #1D1D1D;
	position: relative;

	section {
		margin-top: 40px;
		position: relative;
		z-index: 10;
	}

	.logo {
		display: flex;
		justify-content: center;
	}

	h1 {
		text-align: center;
		margin-top: 24px;
		font-size: 35px;
		letter-spacing: 4px;
		line-height: 1.1;
		font-family: "BoogyBrutPoster-White", sans-serif;
		text-transform: uppercase;
		width: 100%;
		@media only screen and (max-width: 600px) {
			font-size: 25px;
		}
	}

	.connect_wallet_button {
		display: flex;
		justify-content: center;
		margin-top: 14px;
	}

	.connect_wallet_description {
		text-align: center;
		margin-top: 24px;
		line-height: 1.6;
		strong{
			color: #EFBC6A;
		}
		@media only screen and (max-width: 600px) {
			font-size: 14px;
		}
	}

	.agree_block {
		display: flex;
		justify-content: center;
		margin-top: 24px;
	}

	.terms_content {
		strong {
			color: #EFBC6A;
		}

		p, ul, ol, h1, h2, h3, h4, h5, h6 {
			margin: 15px 0;
		}

		p, li {
			font-size: 16px;
			line-height: 1.6;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
			}
		}

		ul, ol {
			padding-left: 30px;

			li {
				margin-bottom: 10px;

				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}

	h2 {
		font-size: 23px;
		font-family: "BoogyBrutPoster-White", sans-serif;
		text-transform: uppercase;
		text-align: center;
	}

	.glow {
		width: 262px;
		height: 262px;
		flex-shrink: 0;
		border-radius: 262px;
		background: #FBBF60;
		filter: blur(180px);
		position: absolute;
		top: 300px;
		right: -200px;
	}
	.back_link{
		display: flex;
		justify-content: center;
		margin-top: 40px;
		a{
			text-align: center;
			text-decoration: underline;
			color: #FBBF60;
			font-size: 16px;
		}
	}
	.redirect_link{
		display: flex;
		justify-content: center;
		margin-top: 40px;
		a{
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #FBBF60;
			color: #1D1D1D;
			padding: 7px 20px;
			font-size: 14px;
			font-weight: bold;
			text-transform: uppercase;
		}
	}
`
