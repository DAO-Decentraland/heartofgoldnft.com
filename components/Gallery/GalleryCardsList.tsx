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
  @media only screen and (max-width: 1024px) {
	  margin-right: -30px;
	  margin-bottom: -60px;
	  margin-top: 40px;
  }
  @media only screen and (max-width: 600px) {
	  margin-right: 0;
	  margin-bottom: -30px;
  }
	.item{
		width: calc(100% / 3 - 73px);
		margin-right: 73px;
		margin-bottom: 100px;
    @media only screen and (max-width: 1024px) {
      width: calc(100% / 3 - 30px);
	    margin-right: 30px;
	    margin-bottom: 60px;
    }
    @media only screen and (max-width: 820px) {
      width: calc(100% / 2 - 30px);
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
	    margin-right: 0;
	    margin-bottom: 30px;
    }
	}
`
