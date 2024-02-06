import Button from "components/Button";
import {ConnectKitButton} from "connectkit";
import styled from "styled-components";
import {useAccount} from "wagmi";
import {trimWallet} from "utils/functions";
import {useEffect, useState} from "react";
import Link from "next/link";
import { useDisconnect } from 'wagmi'
import useClickOutside from "helpers/useClickOutside";
import {useRouter} from "next/router";
export default function ConnectWalletButtonHeader() {
	const ref = useClickOutside(() => setVisible(false));
	const {asPath} = useRouter()
	const { disconnect } = useDisconnect()
	const {address} = useAccount()
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		setVisible(false)
	}, [asPath])
	return (
		<ConnectKitButton.Custom>
			{
				({isConnected, show }) => {
					return (
						!isConnected ? (
							<ConnectWalletButtonWrapper
								onClick={show}
								className="connect_wallet_button"
							>Connect Wallet</ConnectWalletButtonWrapper>
						) : (
							<Wrapper ref={ref}>
								<button onClick={() => setVisible(!visible)} className="profile_button">
									<span>
										<img src="/pic/profile-icon.svg" alt="Profile"/>
									Profile
									</span>
									<img src="/pic/profile-select.svg" alt="Profile select"/>
								</button>
								<ul className={`profile_modal ${visible ? "visible" : ""}`}>
									<li className="collection_label"><Link href="/profile">My collection</Link></li>
									<li className="wallet_label">{trimWallet(address as any, 5)}</li>
									<li>
										<button
											onClick={() => {
												setVisible(false)
												disconnect()
											}}
											className="disconnect_wallet">
											Disconnect
											<img src="/pic/button-arrow.svg" alt="link arrow"/>
										</button>
									</li>
								</ul>
							</Wrapper>
						)
					)
				}
			}
		</ConnectKitButton.Custom>
	)
}

const ConnectWalletButtonWrapper = styled.button`
	height: 50px;
	background: #EFBC6A;
	padding: 15px;
	font-size: 12px;
	font-weight: 300;
	line-height: 13px;
	margin-left: 25px;
	width: 190px;
	text-transform: uppercase;
	position: relative;
	&:before{
		content: "";
		width: calc(100% - 2px);
		height: calc(100% - 2px);
		position: absolute;
		transform: translate(10px, 10px);
		border: 1px solid #EFBC6A;
		transition: all .3s ease-in-out;
	}
`

const Wrapper = styled.div`
	position: relative;
	margin-left: 25px;
	width: 190px;
	.profile_button{
		height: 50px;
		background: #EFBC6A;
		padding: 15px;
		font-size: 12px;
		font-weight: 300;
		line-height: 13px;
		text-transform: uppercase;
		justify-content: space-between;
		text-align: left;
		span{
			display: flex;
			align-items: center;
		}
		img{
			margin-right: 10px;
		}
	}
	.profile_modal{
		position: absolute;
		top: 50px;
		width: 100%;
		left: 0;
		background: #EFBC6A;
		border-top: 1px solid #E2AF5C;
		display: none;
		&.visible{
			display: block;
		}
		li{
			height: 50px;
			display: flex;
			align-items: center;
			padding: 0 30px;
			border-bottom: 1px solid #E2AF5C;
		}
	}
	.collection_label a{
		font-size: 12px;
		font-weight: 300;
		line-height: 13px;
		text-transform: uppercase;
		color: #1D1D1D;
	}
	.wallet_label{
		font-size: 12px;
		font-weight: 300;
		line-height: 13px;
		color: #8B6B37;
	}
	.disconnect_wallet{
		justify-content: space-between;
		font-size: 12px;
		font-weight: 300;
		line-height: 13px;
		text-transform: uppercase;
	}
`
