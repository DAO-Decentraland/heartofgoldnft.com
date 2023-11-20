import {NextSeo} from 'next-seo';
import {useRouter} from "next/router";
import Head from "next/head";

interface SeoProps {
	title?: string;
	description?: string;
	image?: string | null;
	type?: string;
	keywords?: string;
	noindex?: boolean;
	nofollow?: boolean;
}

export default function Seo({title = "", description = "", image = null, type = 'website', keywords = "", noindex = false, nofollow = false}: SeoProps) {
	const {asPath} = useRouter()
	const slug = process.env.WEBSITE
	const titleHead = 'Heart of Gold NFT'
	return (
		<>
			<Head>
				<meta name="keywords" content={keywords}/>
			</Head>
			<NextSeo
				title={`${titleHead} | ${title}`}
				description={description}
				noindex={noindex}
				nofollow={nofollow}
				openGraph={{
					url: `${slug}${asPath}`,
					title: `${titleHead} | ${title}`,
					description: description,
					type: type,
					site_name: titleHead,
					images: [
						{
							url: image ? image.search('http') !== -1 ? image : image ? `${slug}${image}` : "" : "",
							width: 1024,
							height: 512,
							alt: title,
						}
					]
				}}
				twitter={{
					cardType: 'summary_large_image',
				}}
			/>
		</>
	)
}
