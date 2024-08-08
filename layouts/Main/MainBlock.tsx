import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Social from "components/Social";
import MainFlipCard from "layouts/Main/MainFlipCard";

export default function MainBlock() {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="content">
					<Title><h1>Play Deus ex Machina Game</h1></Title>
					<p className="description">Join the $HOG airdrop and be among the first to claim. Maximize your returns with HoG NFTs, offering up to 100x earnings!</p>
					<a className="link_button" href="https://t.me/Deus_Game_Bot" target="_blank" rel="noreferrer">Play now <img src="/pic/button-arrow.svg" alt="link arrow"/></a>
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
	.link_button{
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
		margin-top: 55px;
		max-width: 320px;
		@media only screen and (max-width: 820px) {
			max-width: 100%;
		}
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
	}
`
