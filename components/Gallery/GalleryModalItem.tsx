import styled from "styled-components";
import {useSnapshot} from "valtio";
import {state} from "state";
import Modal from "components/Modals/Modal";
import Image from "next/image";
import Title from "components/Title";
import numberFormat from "helpers/numberFormat";

export default function GalleryModalItem() {
	const snap = useSnapshot(state)
	return (
		<Modal visible={Boolean(snap.galleryModalData)} onClick={() => state.galleryModalData = null}>
			<Wrapper>
				<div className="image_modal">
					<Image width={600} height={876.51} src={`https://cards.heartofgoldnft.com/${snap.galleryModalData?.image}.webp`} alt={snap.galleryModalData ? snap.galleryModalData?.id.toString() : ""}/>
				</div>
				<div className="content_modal">
					<Title><img src="/pic/number-icon.svg" alt={snap.galleryModalData?.id.toString()}/><h2>{numberFormat(snap.galleryModalData?.id)}</h2></Title>
					<ul className="modal_list">
						<li><p>Rarity rank</p><p>{numberFormat(snap.galleryModalData?.rank)}</p></li>
						<li><p>Metal</p><p>{snap.galleryModalData?.metal}</p></li>
						<li><p>Augmentation</p><p>{snap.galleryModalData?.augmentation}</p></li>
						<li><p>Stone</p><p>{snap.galleryModalData?.stone}</p></li>
						<li><p>Pattern</p><p>{snap.galleryModalData?.pattern}</p></li>
						<li><p>Planet</p><p>{snap.galleryModalData?.planet}</p></li>
						<li><p>Star</p><p>{snap.galleryModalData?.star}</p></li>
					</ul>
				</div>
			</Wrapper>
		</Modal>
	)
}

const Wrapper = styled.div`
	display: flex;
  @media only screen and (max-width: 600px) {
	  flex-direction: column;
  }
	.image_modal{
		width: 330px;
		position: relative;
		margin-left: 90px;
    @media only screen and (max-width: 1024px) {
	    margin-left: 0;
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
		img{
			position: relative;
			z-index: 10;
		}
		&:before{
			content: "";
			border-radius: 453.261px;
			background: rgba(4, 140, 121, 0.60);
			filter: blur(100px);
			width: 200px;
			height: 250px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	.content_modal{
		width: 320px;
		padding-left: 70px;
    @media only screen and (max-width: 1024px) {
      width: calc(100% - 330px);
	    padding-left: 80px;
    }
    @media only screen and (max-width: 820px) {
	    padding-left: 40px;
    }
    @media only screen and (max-width: 600px) {
	    padding-left: 0;
      width: 100%;
	    margin-top: 20px;
    }
	}
	.modal_list{
		margin-top: 50px;
    @media only screen and (max-width: 600px) {
	    margin-top: 30px;
    }
		p{
			font-size: 20px;
			font-weight: 300;
			line-height: 160%;
      @media only screen and (max-width: 600px) {
	      font-size: 16px;
      }
			&:first-child{
				color: #A4A4A4;
			}
			&:last-child{
				color: #FFFFFF;
			}
		}
		li{
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #2B2B2B;
			padding-bottom: 10px;
			margin-bottom: 10px;
			&:last-child{
				padding-bottom: 0;
				margin-bottom: 0;
				border-bottom: none;
			}
		}
	}
	.title{
		display: flex;
		align-items: center;
		h2{
			color: #EFBC6A;
			font-size: 60px;
      @media only screen and (max-width: 600px) {
	      font-size: 40px;
      }
		}
		img{
			margin-right: 10px;
      @media only screen and (max-width: 600px) {
        width: 25px;
      }
		}
	}
`
