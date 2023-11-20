import {proxy} from "valtio";
import {Collection, CollectionFilters} from "app-lib/interface/collection";

const stateGallery = proxy({
	galleryPage: 1,
	galleryArray: {
		perPage: null,
		totalPages: null,
		totalItems: null,
		currentPage: null,
		nextPage: null,
		prevPage: null,
		result: null as Collection[] | null
	},
	galleryModalData: null as null | Collection,
	galleryFiltersModal: false as boolean,
	galleryFilters: {
		metal: [],
		augmentation: [],
		color: [],
		pattern: [],
		stone: [],
		planet: [],
		star: []
	} as CollectionFilters,
	gallerySorting: {
		sortBy: "asc" as "asc" | "desc",
		orderBy: "token" as "token" | "rarity"
	}
});

export {stateGallery};
