import styled from "styled-components";
import {Collection} from "app-lib/interface/collection";
import Image from "next/image";
import numberFormat from "helpers/numberFormat";
import {state} from "state";

interface GalleryCardItemProps {
	item: Collection
}

/**
 * GalleryCardItem Component
 * @constructor
 */
export default function GalleryCardItem({item}: GalleryCardItemProps) {
	return (
		<Wrapper onClick={() => state.galleryModalData = item} className="item">
			<Image width={600} height={876.51} src={`https://cards.heartofgoldnft.com/${item.image}.webp`} alt={item.id.toString()}/>
			<ul className="item_description">
				<li><p>ID</p><span>#{numberFormat(item.id)}</span></li>
				<li><p>Rarity rank</p><span>{numberFormat(item.rank)}</span></li>
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: relative;
	cursor: pointer;
	.item_description{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30px;
		li{
			display: flex;
			align-items: center;
			width: calc(50% - 10px);
			&:last-child{
				justify-content: flex-end;
			}
		}
		p{
			color: #A4A4A4;
			font-size: 14px;
			line-height: 160%;
      @media only screen and (max-width: 1024px) {
	      font-size: 12px;
      }
		}
		span{
			color: #FFF;
			font-size: 14px;
			line-height: 160%;
			margin-left: 5px;
      @media only screen and (max-width: 1024px) {
	      font-size: 12px;
      }
		}
	}
`
