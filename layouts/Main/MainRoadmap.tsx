import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import mainImage1 from "public/pic/roadmap/roadmap-1.png"
import mainImage2 from "public/pic/roadmap/roadmap-2.png"
import mainImage3 from "public/pic/roadmap/roadmap-3.png"
import mainImage4 from "public/pic/roadmap/roadmap-4.png"
import ScrollBlock from "components/ScrollBlock";
import {array} from "prop-types";
import Image from "next/image";
import Responsive from "helpers/Responsive";

export default function MainRoadmap() {
	const array = [
		{
			"image": mainImage1,
			"description": "First mint event: 10,000 unique \"Heart of Gold\" NFTs, each with the potential for up to 100X profit upon resale to Deus ex Machina. Whitelisted users get priority access, after which the opportunity opens to all community members.",
			"content_width": 716
		},
		{
			"image": mainImage2,
			"description": "Post-mint, NFT holders can sell their \"Heart of Gold\" NFTs back to Deus ex Machina, potentially earning up to 100x initial price; these NFTs are then permanently burned. Alternatively, holders may sell on the secondary market or save for exclusive Super Lottery access.",
			"content_width": 809
		},
		{
			"image": mainImage3,
			"description": "New \"Heart of Gold\" NFTs will launch on various blockchains, with official announcements on our website and social media. Beware of fakes; only official HoG NFTs ensure winnings.",
			"content_width": 889
		},
		{
			"image": mainImage4,
			"description": "Get ready for the exclusive Super Lottery for \"Heart of Gold\" NFT holders, offering high buy-back rates and a huge prize pool. Holding a HoG NFT is your entry ticket to this event.",
			"content_width": 417
		}
	]

	const RenderScrollBlock = () => {
		return (
			<ScrollBlock scrollVisible={true}>
				{
					array.map((item, index) => {
						return (
							<div className="item" style={{width: `${item.content_width}px`}} key={index}>
								<div className="scroll_item">
									<Image src={item.image} width={item.content_width} alt={`slider image ${index + 1}`}/>
									<p className="description">{item.description}</p>
								</div>
							</div>
						)
					})
				}
			</ScrollBlock>
		)
	}

	return (
		<Wrapper id="road_map">
			<CenterBlock>
				<Title><h2>Roadmap</h2></Title>
				<Responsive width={1730}>
					<RenderScrollBlock/>
				</Responsive>
			</CenterBlock>
			<Responsive width={1730} mobile={
				<RenderScrollBlock/>
			}/>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 260px;
	position: relative;
  @media only screen and (max-width: 1024px) {
    margin-top: 120px;
	  margin-left: -20px;
	  margin-right: -20px;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 80px;
  }
	.title{
		text-align: center;
	}
	.scroll_block{
		margin-top: 20px;
    @media only screen and (max-width: 1730px) {
	   padding: 0 20px 40px 20px;
    }
	}
	.item{
		p{
      width: 100%;
			text-align: center;
      font-size: 20px;
      font-weight: 300;
      line-height: 160%;
		}
		&:nth-child(1) p{
			max-width: 393px;
			margin-top: -140px;
		}
    &:nth-child(2) p{
			max-width: 446px;
	    margin-top: 40px;
    }
    &:nth-child(3) p{
			max-width: 376px;
	    margin-top: -140px;
	    margin-left: 20px;
    }
    &:nth-child(4) p{
			max-width: 395px;
    }
	}
`
