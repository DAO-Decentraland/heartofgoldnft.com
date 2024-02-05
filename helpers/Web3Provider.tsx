import {WagmiProvider, createConfig, http} from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { bsc, bscTestnet } from 'viem/chains'
import {ReactNode} from "react";

export default function Web3Provider({ children }: {children: ReactNode}) {
	
	const config = createConfig(
		getDefaultConfig({
			walletConnectProjectId: "183497fae8d01d467b9013166ba813c5",
			ssr: true,
			appName: "Heart of Gold NFT",
			appDescription: "UNLOCKING THE FUTURE OF NFT - Empower your unstoppable winning streak in our groundbreaking NFT Collection, where GAMEFi meets Play-to-Earn at the ultimate crossroads.",
			appUrl: process.env.WEBSITE,
			appIcon: `${process.env.WEBSITE}/pic/wallet-icon.png`,
			chains: process.env.MODE === "production" ? [bsc, bscTestnet] : [bscTestnet, bsc],
			transports: {
				[bsc.id]: http(bsc.rpcUrls.default.http[0]),
				[bscTestnet.id]: http(bscTestnet.rpcUrls.default.http[0])
			}
		})
	);
	
	const queryClient = new QueryClient();
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<ConnectKitProvider>{children}</ConnectKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	)
}
