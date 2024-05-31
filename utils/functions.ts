import prodABI from "utils/ABI/prod.json"
import devABI from "utils/ABI/dev.json"
import {state} from "state";

export function API(api: string) {
	return `${process.env.WEBSITE}${api}`
}

export function trimWallet(wallet: string, size: number = 10) {
	return wallet ? `${wallet.slice(0, size)} ... ${wallet.slice(0 - size)}` : ""
}

export function getABIContract() {
	return process.env.MODE === "production" ? prodABI : devABI
}

export function checkMintOver(totalSupply: number) {
	state.mintOver = Boolean(process.env.TOTAL_TOKENS && (+totalSupply === +process.env.TOTAL_TOKENS))
}

export function renderPrice(count: number) {
	switch (count) {
		case 1: return "0.1"
		case 2: return "0.2"
		case 3: return "0.3"
		case 4: return "0.4"
		case 5: return "0.5"
		case 6: return "0.6"
		case 7: return "0.7"
		case 8: return "0.8"
		case 9: return "0.9"
	}
}
