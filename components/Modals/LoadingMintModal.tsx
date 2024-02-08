import styled from "styled-components";
import LoadingAnimation from "components/LoadingAnimation";
import MintModal from "components/Modals/MintModal";

interface LoadingMintModalProps {
	visible: boolean
	transaction: null | any
}

/**
 * LoadingMintModal Component
 * @constructor
 */
export default function LoadingMintModal({visible, transaction}: LoadingMintModalProps) {
	return (
		<MintModal width={600} visible={visible}>
			<Wrapper>
				<LoadingAnimation/>
				<h3>Minting</h3>
				{!transaction ? (
					<p className="transaction_description">Your wallet will now open.<br/>And you need to make a transaction</p>
				) : null}
			</Wrapper>
		</MintModal>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 400px;
	.transaction_description{
		font-size: 16px;
		text-align: center;
		font-weight: 300;
		max-width: 320px;
		width: 100%;
		margin: 20px auto 0 auto;
	}
	h3{
		text-align: center;
		font-size: 32px;
		font-weight: 300;
		line-height: 100%;
		margin-top: 40px;
	}
`
