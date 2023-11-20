export interface Collection {
	id: number
	token_id: number
	image: string
	rank: number
	metal?: string
	augmentation?: string
	color?: string
	pattern?: string
	stone?: string
	planet?: string
	star?: string
	prizeX?: number
	prizeAmount?: number
}

export interface CollectionFilters {
	metal: string[],
	augmentation: string[],
	color: string[],
	pattern: string[],
	stone: string[],
	planet: string[],
	star: string[]
}

export interface GalleryResultProps {
	perPage: number
	totalPages: number
	totalItems: number
	currentPage: number
	nextPage: number | null
	prevPage: number | null
	result: Collection[]
}
