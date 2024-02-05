import { RouterBuilder } from 'next-api-handler';
import {prisma} from "dbConnect";
import {corsMiddleware, sendError} from "app-lib/middleware";

const router = new RouterBuilder();

router
	.use(corsMiddleware)
	.get((req) => {
		return prisma.totalSupply.findFirst({})
	});

export default router.build();
