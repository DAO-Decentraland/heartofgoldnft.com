import { RouterBuilder } from 'next-api-handler';
import {prisma} from "dbConnect";
import {corsMiddleware} from "app-lib/middleware";

const router = new RouterBuilder();

router
	.use(corsMiddleware)
	.get((req) => {
		return prisma.totalSupply.findFirst({})
	})
	.patch((req) => {
		const {total} = req.body
		return prisma.totalSupply.update({
			data: {total},
			where: {id: 1}
		})
	})

export default router.build();
