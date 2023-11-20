import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import {useEffect, useState} from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import {Collection} from "app-lib/interface/collection";
import ButtonLink from "components/ButtonLink";

export default function MainCollection() {
	const [array, setArray] = useState<Collection[]>([])
	useEffect(() => {
		const totalTokens = process.env.TOTAL_TOKENS ? +process.env.TOTAL_TOKENS : 5000
		let id: number[] = [];
		for (let i = 0; i < 10; i++) {
			id.push(Math.floor(Math.random() * totalTokens));
		}
		axios.get("/api/gallery/search", {params: {id: JSON.stringify(id)}})
			.then(r => setArray(r.data.data))
	}, [])
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>Our<br/>Collection</h2></Title>
				<p className="description">Embark on a visual journey to discover NFT masterpieces. Explore 10,000 remarkable options, each ready to captivate your imagination. Visit the Gallery to explore their unique visual characteristics and rarity ranks.</p>
			</CenterBlock>
			<Marquee className="list" autoFill={true}>
				{
					array.map((item, index) => {
						return (
							<div className="item" key={index}>
								<Image width={298} height={434} src={`https://cards.heartofgoldnft.com/${item.image}.webp`} alt={item.id.toString()}/>
							</div>
						)
					})
				}
			</Marquee>
			<CenterBlock>
				<ButtonLink href="/gallery">View the gallery</ButtonLink>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 260px;
	.title{
		text-align: center;
	}
	.description{
		max-width: 680px;
		width: 100%;
		margin: 25px auto 0 auto;
		color: #FFF;
		font-size: 20px;
		font-weight: 300;
		line-height: 160%;
		text-align: center;
	}
	.list{
		margin-top: 80px;
	}
	.item{
		margin-right: 20px;
	}
	.button_link{
		max-width: 320px;
		margin: 80px auto 0 auto;
	}
`
