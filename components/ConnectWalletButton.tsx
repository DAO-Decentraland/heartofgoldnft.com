import Button from "components/Button";
import {ConnectKitButton} from "connectkit";
export default function ConnectWalletButton() {
	return (
		<ConnectKitButton.Custom>
			{
				({isConnected, show }) => {
					return (
						!isConnected ? (
							<Button
								onClick={show}
								className="connect_wallet_button"
							>Connect Wallet</Button>
						) : null
					)
				}
			}
		</ConnectKitButton.Custom>
	)
}
