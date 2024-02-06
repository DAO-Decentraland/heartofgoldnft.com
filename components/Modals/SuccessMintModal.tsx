import styled from "styled-components";
import MintModal from "components/Modals/MintModal";
import Title from "components/Title";
import {renderTransactionLink} from "utils/mint";
import ButtonLink from "components/ButtonLink";
import Button from "components/Button";

interface SuccessMintModalProps {
	visible: boolean
	onClick: (value: boolean) => void
	transactionData: any
}

/**
 * SuccessMintModal Component
 * @constructor
 */
export default function SuccessMintModal({visible, onClick, transactionData}: SuccessMintModalProps) {
	return (
		<MintModal width={600} visible={visible} onClick={onClick}>
			<Wrapper>
				<Title><h2>You are welcome!</h2></Title>
				<p className="transaction_label">Your transaction</p>
				<p className="transaction_link">{renderTransactionLink(transactionData?.hash, 8)}</p>
				<div className="buttons_list">
					<ButtonLink href="/profile">Profile</ButtonLink>
					<Button onClick={() => onClick(false)}>Mint Again</Button>
				</div>
			</Wrapper>
		</MintModal>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	.title{
		text-align: center;
	}
	.transaction_label{
		font-size: 20px;
		line-height: 160%;
		color: #FFFFFF;
		text-align: center;
		margin-top: 30px;
	}
	.transaction_link{
		text-align: center;
		margin-top: 5px;
		a{
			font-size: 20px;
			line-height: 160%;
			color: #EFBC6A;
		}
	}
	.buttons_list{
		margin-top: 65px;
		max-width: 350px;
		width: 100%;
		margin-bottom: 30px;
		.button{
			margin-top: 30px;
		}
	}
`
