import MainLink from "next/link"
import { Link } from "react-scroll";
import {state} from "state";
import {useRouter} from "next/router";

export default function MainNav() {
	const {asPath} = useRouter()
	return (
		<ul className="main_nav">
			<li><MainLink className={asPath.includes("gallery") ? "active" : ""} href="/gallery">Gallery</MainLink></li>
			<li><Link onClick={() => state.mobileNav = false} smooth={true} offset={-100} to="road_map">RoadMap</Link></li>
			<li><Link onClick={() => state.mobileNav = false} smooth={true} offset={-100} to="faq">FAQ</Link></li>
			<li><a onClick={() => state.mobileNav = false} href={`https://bscscan.com/address/${process.env.CONTRACT}#readContract`} target="_blank" rel="noreferrer" className="target_slug">Smart contract</a></li>
			<li><a onClick={() => state.mobileNav = false} href="/pdf/litepaper.pdf" target="_blank" rel="noreferrer">Lightpaper</a></li>
		</ul>
	)
}
