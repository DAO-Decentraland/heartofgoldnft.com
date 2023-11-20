import Seo from "helpers/Seo";
import CenterBlock from "helpers/CenterBlock";
import styled from "styled-components";
import {useRouter} from "next/router";
import axios from "axios";
import {API} from "utils/functions";
import {Collection} from "app-lib/interface/collection";
import Image from "next/image";
import Title from "components/Title";
import numberFormat from "helpers/numberFormat";

export default function GalleryCard({data}: {data: Collection}) {
	const {back} = useRouter()
	return (
		<>
			<Seo
				title={`Hog #${data.id}`}
				description="Empower your unstoppable winning streak in our groundbreaking NFT Collection, where GAMEFi meets Play-to-Earn at the ultimate crossroads."
				image={`https://cards.heartofgoldnft.com/${data.image}.png`}
			/>
			<Wrapper>
				<CenterBlock>
					<button onClick={back} className="back_button"><img src="/pic/back-icon.svg" alt="Back"/>Back</button>
					<div className="content_block">
						<div className="image">
							<Image width={600} height={876.51} src={`https://cards.heartofgoldnft.com/${data.image}.webp`} alt={data.id.toString()}/>
						</div>
						<div className="content">
							<Title><img src="/pic/number-icon.svg" alt={data.id.toString()}/><h1>{numberFormat(data.id)}</h1></Title>
							<ul className="list">
								<li><p>Rarity rank</p><p>{numberFormat(data.rank)}</p></li>
								<li><p>Metal</p><p>{data.metal}</p></li>
								<li><p>Suit</p><p>{data.augmentation}</p></li>
								<li><p>Stone</p><p>{data.stone}</p></li>
								<li><p>Figure</p><p>{data.pattern}</p></li>
								<li><p>Cosmos</p><p>{data.planet}</p></li>
								<li><p>Star</p><p>{data.star}</p></li>
							</ul>
						</div>
					</div>
				</CenterBlock>
			</Wrapper>
		</>
	)
}

const Wrapper = styled.section`
	margin-top: 160px;
	.back_button{
		width: auto;
		color: #EFBC6A;
		font-size: 16px;
		font-weight: 500;
		line-height: 100%;
		img{
			margin-right: 10px;
		}
	}
	.content_block{
		display: flex;
		justify-content: space-between;
		max-width: 800px;
		width: 100%;
		margin: 60px auto 0 auto;
	}
	.image{
		position: relative;
		width: 332px;
		img{
			position: relative;
			z-index: 10;
		}
		&:before{
			content: "";
			border-radius: 478.039px;
			background: rgba(4, 140, 121, 0.80);
			filter: blur(100px);
			width: 375.026px;
			height: 478.039px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	.content{
		width: 320px;
		margin-left: 40px;
		position: relative;
		z-index: 10;
	}
	.title{
		color: #EFBC6A;
		display: flex;
		align-items: center;
		img{
			margin-right: 10px;
		}
	}
	.list{
		margin-top: 50px;
		p{
			font-size: 20px;
			font-weight: 300;
			line-height: 160%;
			&:first-child{
				color: #A4A4A4;
			}
			&:last-child{
				color: #FFFFFF;
			}
		}
		li{
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #2B2B2B;
			padding-bottom: 10px;
			margin-bottom: 10px;
			&:last-child{
				padding-bottom: 0;
				margin-bottom: 0;
				border-bottom: none;
			}
		}
	}
`

export async function getServerSideProps(ctx: { query: { id: number; }; }) {
	const data = await axios.get(API(`/api/gallery/${ctx.query.id}`))
	if (!data.status) {
		return {
			redirect: {
				permanent: false,
				destination: '/404'
			}
		}
	}
	return { props: {data: data.data.data.result[0]} }
}
