import styled from "styled-components";
import Marquee from "react-fast-marquee";
import CenterBlock from "helpers/CenterBlock";
import array from "public/data/social.json"
import Title from "components/Title";
import dynamic from "next/dynamic";
import animationTelegram from "public/lottie/telegram-animation.json";
import animationTwitter from "public/lottie/twitter-animation.json";
import animationInstagram from "public/lottie/instagram-animation.json";
import animationDiscord from "public/lottie/discord-animation.json";
const Lottie = dynamic(() => import("lottie-react"), {ssr: false})

export default function MainCommunity() {
	const renderLottieAnimation = (title: string) => {
		switch (title){
			case "telegram": return animationTelegram
			case "twitter": return animationTwitter
			case "instagram": return animationInstagram
			case "discord": return animationDiscord
		}
	}
	return (
		<Wrapper>
			<Marquee className="scroll_line border_line" autoFill={true}>
				<p>join our community</p>
			</Marquee>
			<Marquee direction="right" className="scroll_line solid_line" autoFill={true}>
				<p>join our community</p>
			</Marquee>
			<CenterBlock>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<Title><h3>{item.title}</h3></Title>
									<p className="description">{item.description}</p>
									<a href={item.slug}>Join now <img src="/pic/join-arrow.svg" alt="Join now"/></a>
									<div className="round_animation">
										<Lottie animationData={renderLottieAnimation(item.title)}/>
									</div>
								</div>
							)
						})
					}
				</div>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 260px;
  @media only screen and (max-width: 1024px) {
    margin-top: 120px;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 80px;
  }
	.scroll_line{
		padding: 10px 0;
		position: relative;
		&.border_line{
			border-top: 1px solid #EFBC6A;
			border-bottom: 1px solid #EFBC6A;
			transform: rotate(2.659deg);
			p{
				color: #FFFFFF;
				&:after{
					content: url("/pic/media-li.svg");
				}
			}
		}
		&.solid_line{
			background: #EFBC6A;
			transform: rotate(-2.659deg);
			z-index: 10;
			p{
				color: #080808;
				&:after{
					content: url("/pic/media-li-black.svg");
				}
			}
		}
		p{
			font-size: 42px;
			font-weight: 100;
			line-height: 100%;
			text-transform: uppercase;
			display: flex;
			align-items: center;
			font-family: "BoogyBrutPoster-White", sans-serif;
			&:after{
				margin: 0 40px;
			}
		}
	}
	.list{
		margin-top: 140px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: -20px;
    @media only screen and (max-width: 820px) {
	    margin-top: 80px;
    }
	}
	.item{
		width: calc(50% - 20px);
		height: 350px;
		text-align: center;
		margin-bottom: 20px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    @media only screen and (max-width: 600px) {
      width: 100%;
	    height: 280px;
    }
		&:nth-child(1), &:nth-child(2){
			left: 100px;
      @media only screen and (max-width: 820px) {
	      left: 0;
      }
		}
		&:nth-child(3), &:nth-child(4){
			left: -100px;
      @media only screen and (max-width: 820px) {
	      left: 0;
      }
		}
		a{
			display: inline-flex;
			align-items: center;
			color: #EFBC6A;
			font-size: 16px;
			font-weight: 500;
			line-height: 100%;
			margin: 30px auto 0 auto;
			position: relative;
			z-index: 10;
			img{
				margin-left: 10px;
			}
		}
	}
	.description{
		max-width: 185px;
		width: 100%;
		margin: 15px auto 0 auto;
		font-size: 20px;
		font-weight: 300;
		line-height: 120%;
	}
	.round_animation{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 90%;
    @media only screen and (max-width: 600px) {
	    width: 120%;
    }
	}
`
