/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	compiler: {
		styledComponents: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cards.heartofgoldnft.com'
			},
		],
	},
	env: {
		MODE: process.env.MODE,
		WEBSITE: process.env.WEBSITE,
		CONTRACT: process.env.CONTRACT,
		TOTAL_TOKENS: process.env.TOTAL_TOKENS
	}
}

module.exports = nextConfig
