import {proxy} from "valtio";
import {stateGallery} from "state/gallery";

const state = proxy({
	mobileNav: false,
	utm: null as string | null,
	...stateGallery
});

export {state};
