import Seo from "helpers/Seo";
import ErrorLayout from "components/ErrorLayout";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Custom500(){
	return (
		<>
			<Seo
				title="Page not found"
				description="Internal server error. An internal server error has occured."
				image="/pic/og.jpg"
			/>
			<Header/>
			<main>
				<ErrorLayout image="/pic/500.png" alt="500" title="Internal server error">
					<p>An internal server error has occured.</p>
				</ErrorLayout>
			</main>
			<Footer/>
		</>
	)
}
