import styled from "styled-components";
import Title from "components/Title";
import {useAccount, useReadContract} from "wagmi";
import {useEffect, useState} from "react";
import axios from "axios";
import numberFormat from "helpers/numberFormat";
import ProgressBar from "components/ProgressBar";
import MintForm from "components/Forms/MintForm";
import {checkMintOver, getABIContract} from "utils/functions";
import {formatEther} from "viem";
import {state} from "state";
import {useSnapshot} from "valtio";
import ConnectWalletButton from "components/ConnectWalletButton";

export default function MainMint() {
	const snap = useSnapshot(state)
	const {isConnected} = useAccount()
	const [value, setValue] = useState(3)

	const tokenPrice = useReadContract({
		abi: getABIContract(),
		address: process.env.CONTRACT as any,
		functionName: 'tokenPrice',
	})

	useEffect(() => {
		if (tokenPrice?.data) state.tokenPrice = +formatEther(tokenPrice.data as bigint)
	}, [tokenPrice]);

	useEffect(() => {
		axios.get("/api/total").then(r => {
			checkMintOver(r.data.data.total)
			state.totalSupply = r.data.data.total
		})
	}, []);

	return (
		<Wrapper>
			{snap.mintOver ? (
				<Title><h2>MINTING<br/>IS OVER</h2></Title>
			) : (
				<Title><h2>MINTING<br/>IS NOW LIVE</h2></Title>
			)}
			<p className="price_mint">{value} HoG NFT = {(value * snap.tokenPrice).toFixed(process.env.MODE === "production" ? 1 : 2)} BNB</p>
			{process.env.TOTAL_TOKENS && (
				<p className="total_left">
					{numberFormat(+process.env.TOTAL_TOKENS - snap.totalSupply)} left
				</p>
			)}
			<ProgressBar value={value}/>
			{isConnected ? (
				<MintForm
					value={value}
					onClick={(e) => setValue(e)}
				/>
			) : null}
			<ConnectWalletButton/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.title{
		text-align: center;
	}
	.description{
		max-width: 410px;
		margin: 20px auto 0 auto;
		text-align: center;
    color: #FFF;
    font-size: 20px;
    font-weight: 300;
    line-height: 140%;
    @media only screen and (max-width: 600px) {
	    font-size: 14px;
    }
	}
	.price_mint{
		margin-top: 40px;
		text-align: center;
		font-size: 20px;
		line-height: 100%;
		color: #FFFFFF;
	}
	.progress_bar{
		max-width: 350px;
		width: 100%;
	}
	.connect_wallet_button{
		max-width: 350px;
		margin-top: 25px;
	}
	.total_left{
		text-align: center;
		font-size: 32px;
		font-weight: 300;
		line-height: 100%;
		margin-top: 15px;
	}
`
