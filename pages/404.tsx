import Seo from "helpers/Seo";
import ErrorLayout from "components/ErrorLayout";
import Link from "next/link";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Custom404(){
	return (
		<>
			<Seo
				title="Page not found"
				description="Page not found... Go to home page or gallery"
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<ErrorLayout image="/pic/404.png" alt="404">
					<p>Page not found... Go to <Link href="/">home</Link> page or <Link href="/gallery">gallery</Link></p>
				</ErrorLayout>
			</main>
			<Footer/>
		</>
	)
}
