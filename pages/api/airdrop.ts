import {RouterBuilder} from 'next-api-handler';
import axios from "axios";

const router = new RouterBuilder();

router
	.get(async (req) => {
		const {id} = req.query
		return (await axios.get(`${process.env.BOT_API}/api/airdrop`, {params: {id}})).data
	})
	.post(async (req) => {
		const {walletAddress, id} = req.body
		return (await axios.post(`${process.env.BOT_API}/api/airdrop`, {walletAddress, id})).data
	})
	.delete(async (req) => {
		const {walletAddress, id} = req.query
		return (await axios.delete(`${process.env.BOT_API}/api/airdrop`, {params: {id, walletAddress}})).data
	})

export default router.build();
