import {WagmiProvider} from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider } from "connectkit";
import {ReactNode} from "react";
import config from "utils/wagmiConfig";

export default function Web3Provider({ children }: {children: ReactNode}) {

	const queryClient = new QueryClient();
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<ConnectKitProvider
					options={{
						enforceSupportedChains: false
					}}
				>{children}</ConnectKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	)
}
