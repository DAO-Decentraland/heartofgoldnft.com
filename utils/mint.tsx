export function renderTransactionLink(transaction: string, size: number = 4) {
	if (transaction) {
		if (process.env.MODE === "production") {
			return <a href={`https://bscscan.com/tx/${transaction}`} rel="noreferrer nofollow" target="_blank">{transaction.slice(0, size)} ... {transaction.slice(0 - size)}</a>
		} else {
			return <a href={`https://testnet.bscscan.com/tx/${transaction}`} rel="noreferrer nofollow" target="_blank">{transaction.slice(0, size)} ... {transaction.slice(0 - size)}</a>
		}
	}
}
