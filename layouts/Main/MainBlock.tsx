import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import AnchorLink from "components/AnchorLink";
import Social from "components/Social";
import mainImage from "public/pic/main-image.png"
import Image from "next/image";

export default function MainBlock() {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1>Unlocking the Future of nft</h1></Title>
					<p className="description">Empower your unstoppable winning streak in our groundbreaking NFT Collection, where GAMEFi meets Play-to-Earn at the ultimate crossroads.</p>
					<AnchorLink to="white_list_form">Join the whitelist</AnchorLink>
					<Social/>
				</div>
				<div className="image">
					<Image width={713} src={mainImage} alt="Unlocking the Future of nft"/>
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 140px;
	position: relative;
  @media only screen and (max-width: 600px) {
	  padding-top: 80px;
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
	.image{
		max-width: 713px;
		width: 100%;
		margin-left: 80px;
		@media only screen and (max-width: 820px) {
			margin-left: 0;
			max-width: 100%;
			display: flex;
			justify-content: center;
			margin-top: 80px;
		}
    @media only screen and (max-width: 600px) {
	    margin-top: 40px;
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
