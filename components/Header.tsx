import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Link from "next/link";
import MainNav from "components/MainNav";
import useScrollPosition from "@react-hook/window-scroll";
import {useEffect, useState} from "react";
import Responsive from "helpers/Responsive";
import {state} from "state";

export default function Header() {
	const scrollY = useScrollPosition(60)
	const [fixed, setFixed] = useState(false)
	useEffect(() => {
		setFixed(scrollY > 10)
	}, [scrollY]);
	return (
		<Wrapper className={fixed ? "fixed" : ""}>
			<CenterBlock>
				<Link href="/"><img className="logo" src="/pic/logo.svg" alt="heart of gold nft"/></Link>
				<Responsive width={820} mobile={
					<button onClick={() => state.mobileNav = true} className="mobile_nav">
						<img src="/pic/mobile-nav.svg" alt="Mobil nav"/>
					</button>
				}>
					<MainNav/>
				</Responsive>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.header`
	position: fixed;
  width: 100%;
	top: 0;
	left: 0;
  z-index: 999;
	padding: 30px 0;
	background: transparent;
  transition: all .3s ease-in-out;
	@media only screen and (max-width: 600px) {
		padding: 10px 0;
	}
	.logo{
    width: 100%;
    transition: all .3s ease-in-out;
		@media only screen and (max-width: 600px) {
			width: 55px;
		}
	}
	&.fixed{
		padding: 10px 0;
		background: #1D1D1D;
    transition: all .3s ease-in-out;
		.logo{
      max-width: 60px;
      transition: all .3s ease-in-out;
		}
	}
	.center_block{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.main_nav{
		display: flex;
		align-items: center;
		a{
      color: #FFF;
      font-size: 16px;
			&.active{
				color: #EFBC6A;
			}
			&:hover{
				color: #EFBC6A;
			}
		}
		li{
			margin-right: 40px;
			&:last-child{
				margin-right: 0;
			}
		}
	}
	.mobile_nav{
		width: auto;
	}
`
