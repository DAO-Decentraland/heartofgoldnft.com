import styled from "styled-components";
import {ConnectKitButton} from "connectkit";
import {useAccount} from "wagmi";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";

interface ConnectWalletButtonAirdropProps {
	walletAddress: string | null
	approve: boolean
	onCallBack: () => void
	className?: string
}

export default function ConnectWalletButtonAirdrop({walletAddress, onCallBack, className, approve}: ConnectWalletButtonAirdropProps) {
	const {address} = useAccount()
	const {query} = useRouter()
	const [loading, setLoading] = useState(false)

	const onHandleClick = () => {
		setLoading(true)
		if (!walletAddress) {
			axios.post("/api/airdrop", {walletAddress: address, id: query.id})
				.then(() => {
					setLoading(false)
					onCallBack()
				})
				.catch(() => setLoading(false))
		} else {
			axios.delete("/api/airdrop", {params: {walletAddress: address, id: query.id}})
				.then(() => {
					setLoading(false)
					onCallBack()
				})
				.catch(() => setLoading(false))
		}
	}

	useEffect(() => {
		if (address && query.id && !walletAddress) {
			setLoading(true)
			axios.post("/api/airdrop", {walletAddress: address, id: query.id})
				.then(() => {
					setLoading(false)
					onCallBack()
				})
		}
	}, [address]);

	return (
		<Wrapper className={`connect_wallet_button ${className ? className : ""}`}>
			<ConnectKitButton.Custom>
				{
					({isConnected, show }) => {
						return (
							!isConnected ? (
								<button disabled={!approve} onClick={show}>
									<span className="connect_toggle"/>
									<span className="connect_content">Connect wallet</span>
								</button>
							) : (
								<button disabled={loading || !approve} onClick={onHandleClick}>
									<span className={`connect_toggle ${walletAddress ? "active" : ""}`}/>
									<span className="connect_content">{walletAddress ? "Wallet connected" : "Connect wallet"}</span>
								</button>
							)
						)
					}
				}
			</ConnectKitButton.Custom>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	color: #FFFFFF;
	cursor: pointer;
	width: 100%;
	button{
		width: auto;
		&:disabled{
			opacity: .3;
		}
	}
	.connect_content {
		font-size: 11px;
		font-weight: 500;
		line-height: 100%;
		text-transform: capitalize;
		width: calc(100% - 24px);
		padding-left: 6px;
		color: #FFFFFF;
	}
	.connect_toggle{
		position: relative;
		border: 1px solid #BDBDBD;
		border-radius: 7px;
		width: 24px;
		height: 14px;
		&.active{
			border: 1px solid #00D856;
			&:before{
				background: #00D856;
				left: calc(24px - 10px - 3px);
			}
		}
		&:before{
			content: "";
			position: absolute;
			width: 10px;
			height: 10px;
			background: #BDBDBD;
			border-radius: 50%;
			top: 1px;
			left: 1px;
		}
	}
	.connect_wallet_button{
		cursor: pointer;
	}
`
