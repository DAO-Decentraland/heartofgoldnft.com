import {proxy} from "valtio";
import {stateGallery} from "state/gallery";
import {stateProfile} from "state/profile";
import {MintStatusEnum} from "app-lib/enums/mint.enum";

const state = proxy({
	mobileNav: false,
	utm: null as string | null,
	totalSupply: 0,
	tokenPrice: 0.1 as number,
	mintError: null as string | null,
	mintStatus: MintStatusEnum.MINT_DISABLED as MintStatusEnum,
	mintOver: false as boolean,
	mainLoading: true as boolean,
	...stateGallery,
	...stateProfile
});

export {state};
