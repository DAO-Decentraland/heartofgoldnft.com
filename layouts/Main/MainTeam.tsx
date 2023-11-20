import styled from "styled-components";
import Title from "components/Title";
import CenterBlock from "helpers/CenterBlock";
import array from "public/pic/team.json"
import Image from "next/image";

export default function MainTeam() {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>our team</h2></Title>
				<div className="list">
					{
						array.map((item, index) => {
							return (
								<div className="item" key={index}>
									<Image src={item.image} alt={item.title} width={280} height={280}/>
									<h4>{item.title}</h4>
									<p className="label">{item.label}</p>
									<p className="description">{item.description}</p>
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
	.title{
		text-align: center;
	}
	.list{
		margin-top: 60px;
		display: flex;
		flex-wrap: wrap;
		margin-right: -30px;
		margin-bottom: -95px;
	}
	.item{
    width: calc(100% / 4 - 30px);
		margin-right: 30px;
		margin-bottom: 95px;
		&:nth-child(1){
			margin-top: 30px;
		}
		&:nth-child(2){
			margin-top: 90px;
		}
		&:nth-child(4){
			margin-top: 60px;
		}
		&:nth-child(5), &:nth-child(7){
			margin-top: -60px;
		}
	}
	h4{
    color: #EFBC6A;
    font-size: 20px;
    font-weight: 400;
    line-height: 160%;
    font-family: 'Graphik', sans-serif;
	}
	.label{
    color: #FFF;
    font-size: 16px;
    font-weight: 300;
    line-height: 160%;
	}
	.description{
		margin-top: 15px;
    color: #FFF;
    font-size: 16px;
    font-weight: 300;
    line-height: 130%;
	}
`
