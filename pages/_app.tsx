import "public/css/style.css"
import {AppProps} from "next/app";
import MobileNav from "components/MobileNav";
import GalleryFiltersModal from "components/Gallery/GalleryFiltersModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Web3Provider from "helpers/Web3Provider";
import SwitchNetworkModal from "components/Modals/SwitchNetworkModal";
import ProfileFiltersModal from "components/Profile/ProfileFiltersModal";
import {useEffect} from "react";
import axios from "axios";
import {state} from "state";
import MainLoading from "components/MainLoading";
import config from "utils/wagmiConfig";
import configBot from "utils/wagmiBotConfig";
import {useRouter} from "next/router";

export default function MyApp({Component, pageProps}: AppProps) {
	const {asPath} = useRouter()
	useEffect(() => {
		axios.get("/api/settings")
			.then(r => {
				state.mintStatus = r.data.data.mintStatus
				setTimeout(() => {
					state.mainLoading = false
				}, 800)
			})
	}, [])
	return (
		<Web3Provider config={asPath.includes("/wallet") ? configBot : config}>
			<MainLoading/>
			{!asPath.includes("/wallet") ? <SwitchNetworkModal/> : null}
			<GalleryFiltersModal/>
			<ProfileFiltersModal/>
			<MobileNav/>
			<Component {...pageProps} />
		</Web3Provider>
	)
}
