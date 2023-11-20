import styled from "styled-components";
import {ReactNode} from "react";

interface GalleryCardsListProps {
	children: ReactNode
}

/**
 * GalleryCardsList Component
 * @constructor
 */
export default function GalleryCardsList({children}: GalleryCardsListProps) {
	return (
		<Wrapper className="gallery_cards_list">
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: -73px;
	margin-bottom: -100px;
	margin-top: 80px;
	.item{
		width: calc(100% / 3 - 73px);
		margin-right: 73px;
		margin-bottom: 100px;
	}
`
