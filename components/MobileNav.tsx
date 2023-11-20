import styled from "styled-components";
import {useSnapshot} from "valtio";
import {state} from "state";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";
import MainNav from "components/MainNav";

export default function MobileNav() {
	const snap = useSnapshot(state)
	const {asPath} = useRouter()
	useEffect(() => {
		state.mobileNav = false
	}, [asPath]);
	return (
		<Wrapper className={snap.mobileNav ? "active" : ""}>
			<div className="heading_nav">
				<Link href="/"><img className="logo" src="/pic/logo.svg" alt="heart of gold nft"/></Link>
				<button onClick={() => state.mobileNav = false} className="close_nav"><img src="/pic/close-menu.svg" alt="Close nav"/></button>
			</div>
			<MainNav/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: fixed;
  width: 100%;
	height: 100%;
	top: 0;
	left: 0;
  z-index: 99999;
	padding: 20px;
	background: #0E0E0E;
	display: none;
	&.active{
		display: block;
	}
  .logo{
    width: 100%;
    transition: all .3s ease-in-out;
    display: flex;
    align-items: center;
    line-height: 0;
    @media only screen and (max-width: 600px) {
      width: 55px;
    }
  }
	.heading_nav{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.close_nav{
    width: auto;
	}
	.main_nav{
		margin-top: 50px;
		text-align: center;
		li{
			margin-bottom: 40px;
			&:last-child{
				margin-bottom: 0;
			}
		}
		a{
      color: #FFF;
      text-align: center;
      font-family: "BoogyBrutPoster-White", sans-serif;
      font-size: 40px;
      font-weight: 100;
      line-height: 100%;
      text-transform: uppercase;
			&.active{
				color: #EFBC6A;
			}
		}
	}
`
