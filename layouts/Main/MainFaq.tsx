import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import array from "public/data/faq.json"
import FaqInput from "components/FaqInput";

export default function MainFaq() {
	return (
		<Wrapper id="faq">
			<CenterBlock>
				<Title className="heading"><h2>FAQ</h2></Title>
			</CenterBlock>
			<div className="faq_block">
				{
					array.map((item, index) => {
						return <FaqInput item={item} key={index}/>
					})
				}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 250px;
	.heading{
		text-align: center;
	}
	.faq_block{
		margin-top: 80px;
	}
`
