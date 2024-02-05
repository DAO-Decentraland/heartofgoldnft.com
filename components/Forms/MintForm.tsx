import styled from "styled-components";
import Button from "components/Button";
import CustomSelect from "components/CustomSelect";
import {useAccount} from "wagmi";
import {useSnapshot} from "valtio";
import {state} from "state";
import {useState} from "react";
import { useWriteContract } from 'wagmi'
import {parseEther} from "viem";

interface MintFormProps {
	value: number
	onClick: (value: number) => void
}

/**
 * MintForm Component
 * @constructor
 */
export default function MintForm({value, onClick}: MintFormProps) {
	const account = useAccount()
	const snap = useSnapshot(state)
	const [status, setStatus] = useState("mint")
	const [transaction, setTransaction] = useState("")
	const {writeContract} = useWriteContract()
	const onHandleSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()
		try {
			const transaction = writeContract({
				address: process.env.CONTRACT as any,
				abi: [{
					"inputs": [
						{
							"internalType": "address",
							"name": "_to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "_amount",
							"type": "uint256"
						}
					],
					"name": "mint",
					"outputs": [],
					"stateMutability": "payable",
					"type": "function"
				}],
				functionName: "mint",
				args: [account.address, parseEther(String(value * snap.tokenPrice))],
			})
			console.log(transaction)
		} catch (error) {
			console.log(error)
			setStatus("error")
		}
	}
	return (
		<Wrapper>
			<form className="mint_form" onSubmit={onHandleSubmit}>
				<CustomSelect array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]} value={value} onClick={(e) => onClick(e as number)}/>
				<Button disabled={Boolean(account.chainId !== (process.env.MODE === "production" ? 56 : 97))}>Mint</Button>
			</form>
		</Wrapper>
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
