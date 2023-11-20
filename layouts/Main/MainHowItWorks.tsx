import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import mainImage from "public/pic/how-works-image.png"
import Image from "next/image";
import Responsive from "helpers/Responsive";

export default function MainHowItWorks() {
	return (
		<Wrapper>
			<CenterBlock>
				<Title><h2>How<br/>it works</h2></Title>
				<Responsive width={820} mobile={
					<div className="mobile_image">
						<Image width={293} src={mainImage} alt="How it works"/>
					</div>
				}/>
				<div className="list_position">
					<div className="item">
						<div className="list_item">
							<span>01</span>
							<p>Our collection of 10,000 NFTs is randomly generated on the Binance Smart Chain, offering 100% unique visual characteristics. Each NFT boasts its own distinct blend of seven parameters: metal, augmentation, augmentation color, pattern, stone, planet, and star. The rarity rank of each NFT is determined by its specific combination of these 37 traits.</p>
						</div>
						<div className="list_item">
							<span>02</span>
							<p>Currently, our NFTs are not available for purchase. To be among the first with access to NFT sales, get whitelisted through our official website. Once minting begins, whitelisted community members will get early access to HoG NFTs. Minting will later open to all users.</p>
						</div>
					</div>
					<Responsive width={820}>
						<div className="item">
							<Image width={293} src={mainImage} alt="How it works"/>
						</div>
					</Responsive>
					<div className="item">
						<div className="list_item">
							<span>03</span>
							<p>After the minting sale, the buyback function will be accessible in your account. You can sell your NFT to Deus ex Machina for up to 100X with just one click and permanently burn it. Deus's purchase price depends on rarity, with precious stones holding greater value.</p>
						</div>
						<div className="list_item">
							<span>04</span>
							<p>Don't rush to sell to Deus. When Heart of Gold hits the secondary market, you may find even better offers. Alternatively, use your NFT as an entry ticket for the upcoming members-only Super Lottery, offering unbelievably high coefficients for your NFTs.</p>
						</div>
					</div>
				</div>
				<p className="list_slogan">The rarer your NFT, the more Deus ex Machina will pay you.</p>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 250px;
  @media only screen and (max-width: 1024px) {
    margin-top: 120px;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 80px;
  }
	.title{
		text-align: center;
	}
	.list_position{
		margin-top: 90px;
		display: flex;
		justify-content: space-between;
		align-items: center;
    @media only screen and (max-width: 600px) {
	    flex-direction: column;
	    justify-content: flex-start;
	    align-items: flex-start;
    }
	}
	.item{
    width: calc(100% / 3 - 50px);
    @media only screen and (max-width: 820px) {
      width: calc(100% / 2 - 50px);
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
		&:nth-child(2){
			display: flex;
			justify-content: center;
      @media only screen and (max-width: 820px) {
	      flex-direction: column;
	      justify-content: flex-start;
      }
      @media only screen and (max-width: 600px) {
	      margin-top: 60px;
      }
		}
	}
	.mobile_image{
		display: flex;
		justify-content: center;
		margin-top: 80px;
	}
	.list_item{
		margin-bottom: 75px;
		min-height: 290px;
    @media only screen and (max-width: 600px) {
	    margin-bottom: 60px;
	    min-height: auto;
    }
		span{
			position: relative;
      color: #EFBC6A;
      font-size: 22px;
      line-height: 160%;
      font-family: "BoogyBrutPoster-White", sans-serif;
			margin-left: 40px;
			&:before{
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%) rotate(-17.555deg);
        width: 100px;
        height: 45px;
        border: 1px solid #B29E77;
				border-radius: 50%;
			}
		}
		p{
      font-size: 16px;
      font-weight: 300;
      line-height: 160%;
			margin-top: 30px;
		}
		&:last-child{
			margin-bottom: 0;
		}
	}
	.list_slogan{
		text-align: center;
		max-width: 460px;
		width: 100%;
		margin: 90px auto 0 auto;
    color: #EFBC6A;
    font-size: 26px;
    font-weight: 300;
    line-height: 150%;
	}
`
