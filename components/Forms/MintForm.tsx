import styled from "styled-components";
import Button from "components/Button";
import CustomSelect from "components/CustomSelect";
import {useAccount} from "wagmi";
import {useSnapshot} from "valtio";
import {state} from "state";
import {useState} from "react";
import { useWriteContract } from 'wagmi'
import {getABIContract} from "utils/functions";
import { parseEther } from 'ethers';
import Modal from "components/Modal";

interface MintFormProps {
	value: number
	onClick: (value: number) => void
}

/**
 * MintForm Component
 * @constructor
 */
export default function MintForm({value, onClick}: MintFormProps) {
	const snap = useSnapshot(state)
	const account = useAccount()
	const { writeContractAsync } = useWriteContract()
	const [status, setStatus] = useState("mint")
	const [transaction, setTransaction] = useState("")
	const [error, setError] = useState<null | string>(null)

	const onHandleSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()
		setError(null)
		try {
			const transaction = await writeContractAsync(
				{
				address: process.env.CONTRACT as any,
				abi: getABIContract(),
				functionName: "mint",
				args: [account.address, value],
				value: parseEther(String(value * snap.tokenPrice)),
			})
			console.log(transaction)
		} catch (error) {
			// @ts-ignore
			setError(error?.shortMessage)
			setStatus("error")
		}
	}
	return (
		<>
			<Modal
				width={600}
				visible={Boolean(error)}
				onClick={() => setError(null)}>
				<p>{error}</p>
			</Modal>
			<Wrapper>
				<form className="mint_form" onSubmit={onHandleSubmit}>
					<CustomSelect array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]} value={value} onClick={(e) => onClick(e as number)}/>
					<Button disabled={Boolean(account.chainId !== (process.env.MODE === "production" ? 56 : 97))}>Mint</Button>
				</form>
			</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	max-width: 590px;
	width: 100%;
	margin-top: 45px;
	form{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.custom_select{
		width: calc(50% - 10px);
	}
	.button{
		width: calc(50% - 10px)
	}
`
