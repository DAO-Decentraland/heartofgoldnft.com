import {proxy} from "valtio";
import {stateGallery} from "state/gallery";
import {stateProfile} from "state/profile";

const state = proxy({
	mobileNav: false,
	utm: null as string | null,
	totalSupply: 0,
	tokenPrice: 0.3 as number,
	mintError: null as string | null,
	mintStart: false as undefined | boolean | unknown,
	mintOver: false as boolean,
	mainLoading: true as boolean,
	...stateGallery,
	...stateProfile
});

export {state};
