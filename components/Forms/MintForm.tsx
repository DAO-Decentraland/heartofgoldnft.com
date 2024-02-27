import styled from "styled-components";
import Button from "components/Button";
import CustomSelect from "components/CustomSelect";
import {useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract} from "wagmi";
import {useSnapshot} from "valtio";
import {state} from "state";
import {useEffect, useState} from "react";
import {checkMintOver, getABIContract} from "utils/functions";
import {parseEther} from 'ethers';
import {bsc, bscTestnet} from "viem/chains";
import {MintEnum} from "app-lib/enums/mint.enum";
import LoadingMintModal from "components/Modals/LoadingMintModal";
import ErrorMintModal from "components/Modals/ErrorMintModal";
import SuccessMintModal from "components/Modals/SuccessMintModal";
import axios from "axios";

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
	const [status, setStatus] = useState<MintEnum | null>(null)
	const [transaction, setTransaction] = useState<undefined | any>(undefined)
	const [transactionData, setTransactionData] = useState<null | any>(null)

	const onHandleSubmit = async (e: { preventDefault: () => void; }) => {
		e.preventDefault()
		state.mintError = null
		setStatus(MintEnum.LOADING)
		try {
			const transaction = await writeContractAsync(
				{
				address: process.env.CONTRACT as any,
				abi: getABIContract(),
				functionName: "mint",
				args: [account.address, value],
				value: parseEther(String(value * snap.tokenPrice)),
			})
			setTransaction(transaction)
		} catch (error) {
			// @ts-ignore
			state.mintError = error?.shortMessage
			setStatus(null)
		}
	}

	const { data, error, isSuccess, isLoading, isError } = useWaitForTransactionReceipt({
		chainId: process.env.MODE === "production" ? bsc.id : bscTestnet.id,
		hash: transaction,
		query: {
			enabled: Boolean(transaction)
		}
	})

	useEffect(() => {
		if (isLoading) setStatus(MintEnum.LOADING)
		if (isError) {
			setTransactionData(error)
			setStatus(MintEnum.ERROR)
		}
		if (isSuccess) {
			setTransactionData(data)
			setStatus(MintEnum.SUCCESS)
		}
	}, [isLoading, error, data, isSuccess]);

	const totalTokens = useReadContract({
		abi: getABIContract(),
		address: process.env.CONTRACT as any,
		functionName: 'numTokens',
		query: {
			enabled: status === MintEnum.SUCCESS,
		}
	})

	useEffect(() => {
		if (totalTokens?.data) {
			axios.patch("/api/total", {total: Number(totalTokens?.data as bigint)})
				.then((r) => {
					checkMintOver(r.data.data.total)
					state.totalSupply = r.data.data.total
				})
				.catch(error => console.log(error))
		}
	}, [totalTokens])

	return (
		<>
			<LoadingMintModal
				visible={status === MintEnum.LOADING}
				transaction={transaction}
			/>
			<ErrorMintModal
				transactionData={transactionData}
				visible={status === MintEnum.ERROR}
				onClick={() => {
					setTransactionData(null)
					setTransaction(null)
					setStatus(null)
				}}
			/>
			<SuccessMintModal
				transactionData={transactionData}
				visible={status === MintEnum.SUCCESS}
				onClick={() => {
					setTransactionData(null)
					setTransaction(null)
					setStatus(null)
				}}
			/>
			<Wrapper>
				{
					snap.mintOver ? (
						<p className="mint_over">Thank you for your participation in Heart of Gold!</p>
					) : (
						<form className="mint_form" onSubmit={onHandleSubmit}>
							<CustomSelect
								array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
								value={value}
								onClick={(e) => onClick(e as number)}
							/>
							<Button
								disabled={Boolean(account.chainId !== (process.env.MODE === "production" ? bsc.id : bscTestnet.id))}
							>Mint</Button>
						</form>
					)
				}
			</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	max-width: 690px;
	width: 100%;
	margin-top: 30px;
	.button {
		margin-top: 20px;
	}
	.mint_over{
		text-align: center;
		max-width: 350px;
		width: 100%;
		margin: 20px auto;
	}
`
