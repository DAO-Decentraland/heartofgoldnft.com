import {proxy} from "valtio";
import {Collection, CollectionFilters} from "app-lib/interface/collection";

const stateProfile = proxy({
	profilePage: 1,
	profileArray: {
		perPage: null,
		totalPages: null,
		totalItems: null,
		currentPage: null,
		nextPage: null,
		prevPage: null,
		result: null as Collection[] | null
	},
	profileModalData: null as null | Collection,
	profileFiltersModal: false as boolean,
	profileFilters: {
		metal: [],
		augmentation: [],
		color: [],
		stone: [],
		pattern: [],
		planet: [],
		star: []
	} as CollectionFilters,
	profileSorting: {
		sortBy: "asc" as "asc" | "desc",
		orderBy: "token" as "token" | "rarity"
	}
});

export {stateProfile};
