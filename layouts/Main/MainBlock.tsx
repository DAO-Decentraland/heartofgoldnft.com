import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import AnchorLink from "components/AnchorLink";
import Social from "components/Social";
import MainFlipCard from "layouts/Main/MainFlipCard";
import {useSnapshot} from "valtio";
import {state} from "state";

export default function MainBlock() {
	const snap = useSnapshot(state)
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1>Unlocking the Future of nft</h1></Title>
					<p className="description">Empower your unstoppable winning streak in our groundbreaking NFT Collection, where GAMEFi meets Play-to-Earn at the ultimate crossroads.</p>
					<AnchorLink to="mint_block">{snap.mintStart ? "Mint ticket" : "Join the whitelist"}</AnchorLink>
					<Social/>
				</div>
				<MainFlipCard/>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 140px;
	position: relative;
  @media only screen and (max-width: 600px) {
	  padding-top: 100px;
  }
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 820px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.title{
		@media only screen and (max-width: 820px) {
			text-align: center;
		}
	}
	.content{
		max-width: 450px;
    width: 100%;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
		}
	}
	.description{
		margin-top: 30px;
    font-size: 20px;
    font-weight: 300;
    line-height: 160%;
		@media only screen and (max-width: 820px) {
			text-align: center;
		}
	}
	.anchor_link{
		margin-top: 55px;
		max-width: 320px;
    @media only screen and (max-width: 820px) {
	    max-width: 100%;
    }
	}
	.social{
		margin-top: 110px;
		display: flex;
		align-items: center;
		@media only screen and (max-width: 820px) {
			margin-top: 60px;
			justify-content: center;
		}
		a svg{
			fill: #EFBC6A;
		}
		li{
			margin-right: 20px;
			&:last-child{
				margin-right: 0;
			}
		}
	}
`
