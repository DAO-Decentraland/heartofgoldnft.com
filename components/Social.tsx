import array from "public/data/social-main.json"

interface SocialProps {
	className?: string
}

/**
 * Social Component
 * @constructor
 */
export default function Social({className}: SocialProps) {
	return (
		<ul className={`social ${className ? className : ""}`}>
			{
				array.map((item, index) => {
					return (
						<li key={index}>
							<a href={item.slug} target="_blank" rel="noreferrer">
								<img src={item.icon} alt={item.title}/>
							</a>
						</li>
					)
				})
			}
		</ul>
	)
}
