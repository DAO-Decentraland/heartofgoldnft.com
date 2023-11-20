import { RouterBuilder } from 'next-api-handler';
import {prisma} from "dbConnect";
import {corsMiddleware, sendError} from "app-lib/middleware";

const router = new RouterBuilder();

router
	.use(corsMiddleware)
	.get((req) => {
		const {id} = req.query
		if (typeof id === "string") {
			const parseId = JSON.parse(id)
			return prisma.collection.findMany({
				orderBy: {id: "asc"},
				where: {id: {in: parseId}}
			})
		}
		return sendError("Error fetching data")
	});

export default router.build();
