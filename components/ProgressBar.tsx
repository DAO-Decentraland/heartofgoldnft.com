import styled from "styled-components";
import {useSnapshot} from "valtio";
import {state} from "state";
import {useEffect} from "react";
import numberFormat from "helpers/numberFormat";
import axios from "axios";

interface ProgressBarProps {
	value: number,
}
export default function ProgressBar({value}: ProgressBarProps) {
	const snap = useSnapshot(state)

	useEffect(() => {
		const timer = setInterval(() => {
			axios.get("/api/total")
				.then(r => state.totalSupply = r.data.data.total)
		}, 30000);
		return () => clearInterval(timer);
	})
	return (
		process.env.TOTAL_TOKENS ? (
			<Wrapper className="progress_bar">
				<div className="progress_line">
					<span style={{width: (+process.env.TOTAL_TOKENS - snap.totalSupply * 100) / +process.env.TOTAL_TOKENS}}/>
				</div>
				<div className="progress_description">
					<ul>
						<li>Mint {value} NFT using {(value * snap.tokenPrice).toFixed(process.env.MODE === "production" ? 1 : 2)} BNB</li>
					</ul>
					{/*<p>Out of {numberFormat(process.env.TOTAL_TOKENS)}</p>*/}
				</div>
			</Wrapper>
		) : null
	)
}

const Wrapper = styled.div`
	margin-top: 25px;
	width: 100%;
	@media only screen and (max-width: 600px) {
		margin-top: 15px;
	}
	.progress_line{
		position: relative;
		height: 15px;
		width: 100%;
		background: #1D1D1D;
		overflow: hidden;
		@media only screen and (max-width: 600px) {
			margin-top: 30px;
		}
		span{
			position: absolute;
			height: 100%;
			top: 0;
			left: 0;
			background: #EFBC6A;
			z-index: 10;
			transition: .3s linear;
		}
	}
	.progress_description{
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		font-weight: 300;
		font-size: 14px;
		line-height: 120%;
		color: #9C9C9C;
		@media only screen and (max-width: 600px) {
			font-size: 11px;
			line-height: 120%;
		}
		ul{
			width: 100%;
		}
		li{
			width: 100%;
			text-align: center;
		}
	}
`
