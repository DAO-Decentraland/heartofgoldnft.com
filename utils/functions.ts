import prodABI from "utils/ABI/prod.json"
import devABI from "utils/ABI/dev.json"
import {state} from "state";

export function API(api: string) {
	return `${process.env.WEBSITE}${api}`
}

export function trimWallet(wallet: string, size: number = 10) {
	return wallet ? `${wallet.slice(0, size)} ... ${wallet.slice(0 - size)}` : ""
}

export async function checkTransaction(transaction: any) {
	const status = await transaction.wait(5)
	if (status && status.status === 1) {
		return {
			status: true,
			hash: transaction.hash
		}
	} else return {
		status: false,
		hash: transaction.hash
	}
}

export function getABIContract() {
	return process.env.MODE === "production" ? prodABI : devABI
}

export function checkMintOver(totalSupply: number) {
	state.mintOver = Boolean(process.env.TOTAL_TOKENS && +totalSupply === +process.env.TOTAL_TOKENS)
}
