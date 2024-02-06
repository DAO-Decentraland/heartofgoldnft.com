import styled from "styled-components";
import {useAccount, useSwitchChain} from "wagmi";
import Modal from "components/Modals/Modal";
import {useEffect, useState} from "react";
import Button from "components/Button";
import {bsc, bscTestnet} from "viem/chains";

export default function SwitchNetworkModal() {
	const {isConnected, chainId} = useAccount()
	const {switchChain } = useSwitchChain()
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		if (isConnected && (chainId !== (process.env.MODE === "production" ? 56 : 97))) {
			setVisible(true)
		} else setVisible(false)
	}, [isConnected, chainId]);

	const networkId = process.env.MODE === "production" ? bsc.id : bscTestnet.id

	return (
		<Modal width={600} visible={visible}>
			<Wrapper>
				<p>You've connected to a network that shouldn't be used. Please switch to another network by clicking the 'Switch network' button below.</p>
				<Button
					onClick={() => switchChain({chainId: networkId})}
					className="submit_button"
				>Switch network</Button>
			</Wrapper>
		</Modal>
	)
}

const Wrapper = styled.div`
	.submit_button{
		margin-top: 20px;
	}
`
