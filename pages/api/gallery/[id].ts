import { RouterBuilder } from 'next-api-handler';
import {prisma} from "dbConnect";
import {corsMiddleware} from "app-lib/middleware";
import {Collection} from "app-lib/interface/collection";

const router = new RouterBuilder();

router
	.use(corsMiddleware)
	.get(async (req) => {
		const {id, array} = req.query
		let data: Collection[] = []
		if (typeof array === "string") {
			const tokensArray = JSON.parse(array)
			if (tokensArray.includes(Number(id))) {
				const resultData = await prisma.collection.findUnique({
					where: {id: Number(id)}
				})
				data = [resultData]
			}
		} else {
			const resultData = await prisma.collection.findUnique({
				where: {id: Number(id)}
			})
			data = [resultData]
		}
		return {
			perPage: null,
			totalPages: 1,
			totalItems: 1,
			currentPage: 1,
			nextPage: null,
			prevPage: null,
			result: data
		}
	});

export default router.build();
