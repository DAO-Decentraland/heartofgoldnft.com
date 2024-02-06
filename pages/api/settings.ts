import { RouterBuilder } from 'next-api-handler';
import {prisma} from "dbConnect";
import {corsMiddleware} from "app-lib/middleware";

const router = new RouterBuilder();

router
	.use(corsMiddleware)
	.get(() => {
		return prisma.settings.findFirst({})
	})

export default router.build();
