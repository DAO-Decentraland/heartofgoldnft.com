import styled from "styled-components";
import mainImage from "public/pic/flip-image.png"
import Image from "next/image";
import Slider from "react-slick"
import ReactCardFlip from 'react-card-flip';
import topFlip1 from "public/pic/flip-cards/flip-1-1.png"
import bottomFlip1 from "public/pic/flip-cards/flip-1-2.png"
import topFlip2 from "public/pic/flip-cards/flip-2-1.png"
import bottomFlip2 from "public/pic/flip-cards/flip-2-2.png"
import topFlip3 from "public/pic/flip-cards/flip-3-1.png"
import bottomFlip3 from "public/pic/flip-cards/flip-3-2.png"
import {useState} from "react";

export default function MainFlipCard() {
	const [isFlipped, setIsFlipped] = useState(false)
	const array = [
		{
			"top": topFlip1,
			"bottom": bottomFlip1,
			"value": 100,
			"color": "#EFBC6A"
		},
		{
			"top": topFlip2,
			"bottom": bottomFlip2,
			"value": 5,
			"color": "#CBCBCB"
		},
		{
			"top": topFlip3,
			"bottom": bottomFlip3,
			"value": 2,
			"color": "#D4886C"
		}
	]
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		pauseOnHover: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	return (
		<Wrapper>
			<div className="flip_slider">
				<Slider {...settings}>
					{
						array.map((item, index) => {
							return (
								<div
									onMouseEnter={() => setIsFlipped(true)}
									onMouseLeave={() => setIsFlipped(false)}
									className="slider_item" key={index}>
									<ReactCardFlip isFlipped={isFlipped}>
										<div className="top_flip">
											<Image src={item.top} alt={`top flip card`}/>
										</div>
										<div className="bottom_flip">
											<p style={{color: item.color}}>
												<svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fillRule="evenodd" clipRule="evenodd" d="M16.1783 5.78255L16.1641 5.76838L20.9642 0.968262L20.9784 0.982432L20.9925 0.968277L25.7927 5.7684L25.7785 5.78255L33.3372 13.3413L28.5371 18.1414L20.9784 10.5827L13.4197 18.1414L8.61953 13.3413L16.1783 5.78255ZM10.5282 21.0367L5.7281 16.2366L0.927979 21.0367L5.7281 25.8369L10.5282 21.0367ZM20.9642 16.2366L25.7643 21.0367L20.9642 25.8369L16.1641 21.0367L20.9642 16.2366ZM36.2 16.2366L41.0001 21.0367L36.2 25.8369L31.3999 21.0367L36.2 16.2366ZM20.9641 41.0309L20.9783 41.0167L20.9925 41.0309L25.7926 36.2307L25.7784 36.2166L33.3372 28.6578L28.537 23.8577L20.9783 31.4165L13.4196 23.8577L8.61946 28.6579L16.1782 36.2166L16.164 36.2307L20.9641 41.0309Z" fill={item.color}/>
												</svg>
												<span>x</span> {item.value}
											</p>
											<Image src={item.bottom} alt={`bottom flip card`}/>
										</div>
									</ReactCardFlip>
								</div>
							)
						})
					}
				</Slider>
			</div>
			<Image src={mainImage} alt="Flip card background"/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  max-width: 713px;
  width: 100%;
  margin-left: 80px;
	position: relative;
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
	.flip_slider{
		position: absolute;
		top: 50%;
		left: 50%;
    width: 433px;
		transform: translate(-50%, -50%);
    z-index: 10;
	}
	.slider_item{
		position: relative;
		padding: 0 20px;
    @media only screen and (max-width: 1024px) {
	    padding: 0 80px;
    }
    @media only screen and (max-width: 820px) {
      padding: 0 40px; 
    }
    @media only screen and (max-width: 600px) {
	    padding: 0 120px;
    }
	}
	.bottom_flip{
		position: relative;
		p{
      width: 224px;
			height: 98px;
			display: flex;
			align-items: center;
			text-align: center;
      font-family: "BoogyBrutPoster-White", sans-serif;
      font-size: 58px;
      font-style: normal;
      font-weight: 100;
      line-height: 100%;
      letter-spacing: 2.32px;
      text-transform: uppercase;
			position: absolute;
			top: 135px;
			left: 50%;
      border-radius: 20px;
      background: #1D1D1D;
			transform: translateX(-50%);
			padding: 20px 25px;
			justify-content: center;
		}
		span{
      font-size: 35px;
			margin: 0 20px;
		}
	}
`
