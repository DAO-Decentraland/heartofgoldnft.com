import {proxy} from "valtio";
import {stateGallery} from "state/gallery";

const state = proxy({
	mobileNav: false,
	utm: null as string | null,
	totalSupply: 0,
	tokenPrice: 0.3 as number,
	mintError: null as string | null,
	mintStart: false as undefined | boolean | unknown,
	mintOver: false as boolean,
	...stateGallery
});

export {state};
