import "public/css/style.css"
import {AppProps} from "next/app";
import Header from "components/Header";
import Footer from "components/Footer";
import MobileNav from "components/MobileNav";
import GalleryFiltersModal from "layouts/Gallery/GalleryFiltersModal";

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GalleryFiltersModal/>
      <MobileNav/>
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  )
}
