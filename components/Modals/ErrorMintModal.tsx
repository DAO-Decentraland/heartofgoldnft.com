import styled from "styled-components";
import MintModal from "components/Modals/MintModal";
import Title from "components/Title";
import Button from "components/Button";
import {renderTransactionLink} from "utils/mint";

interface ErrorMintModalProps {
	visible: boolean
	onClick: (value: boolean) => void
	transactionData?: any
}

/**
 * ErrorMintModal Component
 * @constructor
 */
export default function ErrorMintModal({visible, onClick, transactionData}: ErrorMintModalProps) {
	return (
		<MintModal width={600} visible={visible} onClick={onClick}>
			<Wrapper>
				<Title><h2>Something went wrong</h2></Title>
				{
					transactionData?.hash ? (
						<>
							<p className="transaction_label">Your transaction</p>
							<p className="transaction_link">{renderTransactionLink(transactionData?.hash, 8)}</p>
						</>
					) : (
						<p className="error_description">{transactionData}</p>
					)
				}
				<Button onClick={() => onClick(false)}>Try again</Button>
			</Wrapper>
		</MintModal>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
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
	.error_description{
		margin-top: 30px;
		font-size: 20px;
		font-weight: 400;
		line-height: 160%;
		a{
			color: #EFBC6A;
		}
	}
	.button{
		margin-top: 65px;
		max-width: 350px;
		margin-bottom: 30px;
	}
`
