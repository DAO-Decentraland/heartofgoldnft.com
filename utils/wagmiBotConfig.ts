import {createConfig} from "wagmi";
import {getDefaultConfig} from "connectkit";

const config = createConfig(
	getDefaultConfig({
		walletConnectProjectId: "183497fae8d01d467b9013166ba813c5",
		ssr: true,
		appName: "Heart of Gold NFT",
		appDescription: "UNLOCKING THE FUTURE OF NFT - Empower your unstoppable winning streak in our groundbreaking NFT Collection, where GAMEFi meets Play-to-Earn at the ultimate crossroads.",
		appUrl: process.env.WEBSITE,
		appIcon: `${process.env.WEBSITE}/pic/wallet-icon.png`,
	})
);

export default config
