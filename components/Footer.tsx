import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Link from "next/link";
import Social from "components/Social";

export default function Footer() {
	return (
		<Wrapper>
			<CenterBlock>
				<div className="logo">
					<Link href="/"><img width={77} src="/pic/logo.svg" alt="heart of gold nft"/></Link>
				</div>
				<ul className="links">
					<li><a href="mailto:info@heartofgoldnft.com">info@heartofgoldnft.com</a></li>
					<li><a href={`https://bscscan.com/address/${process.env.CONTRACT}#readContract`} target="_blank" rel="noreferrer" className="target_slug">Smart contract</a></li>
					<li><a href="/pdf/litepaper.pdf" target="_blank" rel="noreferrer" className="target_slug">Lightpaper</a></li>
				</ul>
				<Social/>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.footer`
	position: relative;
	padding-top: 130px;
	padding-bottom: 55px;
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 1024px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
	.logo{
		@media only screen and (max-width: 1024px) {
			display: flex;
			justify-content: center;
			width: 100%;
		}
	}
	.links{
		display: flex;
		align-items: center;
		@media only screen and (max-width: 1024px) {
			justify-content: center;
			width: 100%;
			margin-top: 20px;
		}
		@media only screen and (max-width: 600px) {
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
		}
		a{
      color: #EFBC6A;
      font-size: 16px;
      line-height: 100%;
			display: inline-flex;
			align-items: center;
			&:hover{
				color: #FFFFFF;
			}
			&.target_slug:after{
				content: url("/pic/slug-arrow.svg");
				margin-left: 10px;
			}
		}
		li{
			margin-right: 50px;
			@media only screen and (max-width: 600px) {
				margin-right: 0;
				width: 100%;
				display: flex;
				justify-content: center;
				margin-bottom: 15px;
			}
			&:last-child{
				margin-right: 0;
				@media only screen and (max-width: 600px) {
					margin-bottom: 0;
				}
			}
		}
	}
	.social{
		display: flex;
		align-items: center;
		@media only screen and (max-width: 1024px) {
			justify-content: center;
			width: 100%;
			margin-top: 30px;
		}
		li{
			margin-right: 20px;
			&:last-child{
				margin-right: 0;
			}
		}
	}
`
