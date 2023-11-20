import { RouterBuilder } from 'next-api-handler';
import { corsMiddleware } from "app-lib/middleware";
import {prisma} from "dbConnect";

const router = new RouterBuilder();

router
	.use(corsMiddleware)
	.post( (req) => {
		const {email, wallet, utm} = req.body
		return prisma.whiteListForm.create({
			data: {email, wallet, utm}
		})
	});

export default router.build();
