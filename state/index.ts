import {proxy} from "valtio";
import {stateGallery} from "state/gallery";

const state = proxy({
	mobileNav: false,
	utm: null as string | null,
	totalSupply: 0,
	tokenPrice: 0.3,
	mintError: null as string | null,
	...stateGallery
});

export {state};
