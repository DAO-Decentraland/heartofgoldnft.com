import {NextApiRequest, NextApiResponse} from "next";
import NextCors from "nextjs-cors";
import {HttpException} from "next-api-handler";

export function sendError(error: string | null) {
	throw new HttpException(500, error ? error : "Access is denied", error ? error : "Access is denied")
}

export async function corsMiddleware(req: NextApiRequest, res: NextApiResponse) {
	await NextCors(req, res, {
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: "*",
		optionsSuccessStatus: 200,
	});
}
