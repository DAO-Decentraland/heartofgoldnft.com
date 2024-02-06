import styled from "styled-components";
import LoadingAnimation from "components/LoadingAnimation";
import MintModal from "components/Modals/MintModal";

interface LoadingMintModalProps {
	visible: boolean
}

/**
 * LoadingMintModal Component
 * @constructor
 */
export default function LoadingMintModal({visible}: LoadingMintModalProps) {
	return (
		<MintModal width={600} visible={visible}>
			<Wrapper>
				<LoadingAnimation/>
				<p>Minting</p>
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
	p{
		text-align: center;
		font-size: 32px;
		font-weight: 300;
		line-height: 100%;
		margin-top: 40px;
	}
`
