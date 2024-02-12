import { RouterBuilder } from 'next-api-handler';
import {corsMiddleware, sendError} from "app-lib/middleware";
import {prisma} from "dbConnect";

const router = new RouterBuilder();

router
	.use(corsMiddleware)
	.get(async (req) => {
		const {email} = req.query
		const check = await prisma.whiteListForm.findUnique({
			where: {email}
		})
		if (!check) return sendError("User is not found")
	})
	.post( (req) => {
		const {email, wallet, utm} = req.body
		return prisma.whiteListForm.create({
			data: {email, wallet, utm}
		})
	});

export default router.build();
