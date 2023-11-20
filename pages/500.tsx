import Seo from "helpers/Seo";
import ErrorLayout from "components/ErrorLayout";

export default function Custom500(){
	return (
		<>
			<Seo
				title="Page not found"
				description="Internal server error. An internal server error has occured."
				image="/pic/og.jpg"
			/>
			<ErrorLayout image="/pic/500.png" alt="500" title="Internal server error">
				<p>An internal server error has occured.</p>
			</ErrorLayout>
		</>
	)
}
