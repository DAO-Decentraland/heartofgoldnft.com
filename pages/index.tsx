import Seo from "helpers/Seo";
import MainBlock from "layouts/Main/MainBlock";
import MainFaq from "layouts/Main/MainFaq";
import MainTeam from "layouts/Main/MainTeam";
import MainHowItWorks from "layouts/Main/MainHowItWorks";
import MainRoadmap from "layouts/Main/MainRoadmap";
import MainMedia from "layouts/Main/MainMedia";
import MainCollection from "layouts/Main/MainCollection";
import MainCommunity from "layouts/Main/MainCommunity";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {state} from "state";
import {scroller} from "react-scroll";
import MainMint from "layouts/Main/MainMint";
import {useSnapshot} from "valtio";
import MainWhitelisted from "layouts/Main/MainWhitelisted";
import MintWhiteListWrapper from "layouts/Main/MintWhiteListWrapper";
import ErrorMintModal from "components/Modals/ErrorMintModal";

export default function Home(){
	const snap = useSnapshot(state)
	const {query} = useRouter()
	useEffect(() => {
		if (query && !query.scroll) state.utm = JSON.stringify(query)
		if (query.scroll) {
			setTimeout(() => {
				scroller.scrollTo(query.scroll as string, {
					duration: 1500,
					delay: 100,
					smooth: true,
					offset: -76,
				})
			}, 300)
		}
	}, [query]);
	return (
		<>
			<Seo
				title="Unlocking the Future of nft"
				description="Empower your unstoppable winning streak in our groundbreaking NFT Collection, where GAMEFi meets Play-to-Earn at the ultimate crossroads."
				image="/pic/og.jpg"
			/>
			<ErrorMintModal
				visible={Boolean(snap.mintError)}
				onClick={() => state.mintError = null}
				transactionData={snap.mintError}
			/>
			<MainBlock/>
			<MainMedia/>
			<MintWhiteListWrapper>
				{snap.mintStart ? <MainMint/> : <MainWhitelisted/>}
			</MintWhiteListWrapper>
			<MainHowItWorks/>
			<MainCommunity/>
			<MainCollection/>
			<MainRoadmap/>
			<MainTeam/>
			<MainFaq/>
		</>
	)
}
