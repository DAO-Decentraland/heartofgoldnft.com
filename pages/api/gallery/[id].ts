import { RouterBuilder } from 'next-api-handler';
import {prisma} from "dbConnect";
import {corsMiddleware} from "app-lib/middleware";

const router = new RouterBuilder();

router
	.use(corsMiddleware)
	.get(async (req) => {
		const {id} = req.query
		const data = await prisma.collection.findUnique({
			where: {id: Number(id)}
		})
		return {
			perPage: null,
			totalPages: 1,
			totalItems: 1,
			currentPage: 1,
			nextPage: null,
			prevPage: null,
			result: [data]
		}
	});

export default router.build();
