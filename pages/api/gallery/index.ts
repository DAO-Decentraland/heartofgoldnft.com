import { RouterBuilder } from 'next-api-handler';
import { prisma } from "dbConnect";
import { corsMiddleware, sendError } from "app-lib/middleware";

const router = new RouterBuilder();

router
	.use(corsMiddleware)
	.get(async (req) => {
		const { filter, limit, page, sorting } = req.query;
		let perPage = limit ? Number(limit) : 10;
		
		if (typeof filter === "string" && typeof sorting === "string") {
			const parseFilter = JSON.parse(filter);
			const parseSorting = JSON.parse(sorting);
			let orderBy = null;
			if (parseSorting.orderBy === "rarity") {
				orderBy = { "rank": parseSorting.sortBy };
			} else {
				orderBy = { id: parseSorting.sortBy };
			}
			
			const generateFilter = () => {
				const array = [] as any;
				Object.keys(parseFilter).map(function(key, index) {
					if (parseFilter[key].length) {
						array.push({ [key]: { in: parseFilter[key] } });
					}
				});
				return array;
			};
			
			const searchQuery = generateFilter();
			
			const total = await prisma.collection.count({
				where: searchQuery.length ? { AND: searchQuery } : {}
			});
			
			const totalPages = Math.ceil(total / perPage);
			const currentPage = Number(page) || 1;
			
			let result = [];
			
			if (total > 0) {
				result = await prisma.collection.findMany({
					take: perPage,
					skip: perPage * (currentPage - 1),
					orderBy,
					where: searchQuery.length ? { AND: searchQuery } : {}
				});
			}
			
			const nextPage = totalPages !== currentPage ? currentPage + 1 : null;
			const prevPage = currentPage > 1 ? currentPage - 1 : null;
			
			return {
				perPage,
				totalPages,
				totalItems: total,
				currentPage,
				nextPage,
				prevPage,
				result
			};
		}
		
		return sendError("Error fetching data");
	});

export default router.build();
