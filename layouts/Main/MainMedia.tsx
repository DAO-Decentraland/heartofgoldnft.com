import styled from "styled-components";
import Marquee from "react-fast-marquee";
import array from "public/data/media.json"
import Image from "next/image";

interface MainMediaProps {
	slug: string
	image: string
	width: number
	height: number
	title: string
}

export default function MainMedia() {
	return (
		<Wrapper>
			<Marquee autoFill={true}>
				{
					array.map((item: MainMediaProps, index) => {
						return (
							<div className="item" key={index}>
								{
									item.slug !== "#" ? (
										<a href={item.slug} target="_blank" rel="noreferrer">
											<Image src={item.image} width={item.width} height={item.height} alt={item.title}/>
										</a>
									) : (
										<Image src={item.image} width={item.width} height={item.height} alt={item.title}/>
									)
								}
							</div>
						)
					})
				}
			</Marquee>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 220px;
	@media only screen and (max-width: 1024px) {
		margin-top: 120px;
	}
	@media only screen and (max-width: 600px) {
		margin-top: 80px;
	}
	.item{
		display: flex;
		align-items: center;
    @media only screen and (max-width: 600px) {
      width: 230px;
    }
		a{
			display: flex;
			align-items: center;
		}
		&:after{
			content: url("/pic/media-li.svg");
			margin: 0 40px;
		}
	}
`
