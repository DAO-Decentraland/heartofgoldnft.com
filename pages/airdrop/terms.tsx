import Seo from "helpers/Seo";
import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Terms(){
	const {query} = useRouter()
	return (
		<>
			<Seo
				title="Airdrop Terms"
				description="How to claim your $HOG airdrop"
			/>
			<main>
				<Wrapper>
					<CenterBlock width={820}>
						<div className="content_block">
							<div className="heading">
								<Link href={`/airdrop?id=${query.id}`}><img width={138} src="/pic/logo.svg" alt="HoG"/></Link>
								<p>Airdrop</p>
							</div>
							<div className="content">
								<h1>Legal Disclaimer</h1>
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
	min-height: 100vh;
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
	.content{
		margin-top: 24px;
		h1{
			font-size: 20px;
		}
		strong{
			color: #EFBC6A;
		}
		p, ul, ol, h1, h2, h3, h4, h5, h6 {
			margin: 15px 0;
		}
		p, li{
			font-size: 16px;
			line-height: 1.6;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
			}
		}
		ul, ol{
			padding-left: 30px;
			li{
				margin-bottom: 10px;
				&:last-child{
					margin-bottom: 0;
				}
			}
		}
	}
`
