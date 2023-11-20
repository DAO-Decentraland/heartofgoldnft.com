import Seo from "helpers/Seo";
import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import GalleryFiltersModal from "layouts/Gallery/GalleryFiltersModal";
import {useEffect} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import GallerySorting from "components/GallerySorting";
import {state} from "state";
import {useSnapshot} from "valtio";
import GalleryCardItem from "components/Gallery/GalleryCardItem";
import GalleryCardsList from "components/Gallery/GalleryCardsList";
import GalleryModalItem from "components/Gallery/GalleryModalItem";
import Pagination from "components/Pagination";
import GalleryNotification from "components/Gallery/GalleryNotification";

export default function Gallery(){
	const {query, push} = useRouter()
	const snap = useSnapshot(state)

	useEffect(() => {
		push("/gallery?page=1").then(() => makeRequest(1))
	}, [snap.galleryFilters, snap.gallerySorting]);

	useEffect(() => {
		state.galleryPage = query.page ? Number(query.page) : 1
	}, [query.page]);

	useEffect(() => {
		makeRequest(Number(snap.galleryPage))
	}, [snap.galleryPage])

	const makeRequest = (page: number) => {
		axios.get("/api/gallery", {
			params: {
				page,
				limit: 12,
				filter: JSON.stringify(snap.galleryFilters),
				sorting: JSON.stringify(snap.gallerySorting)
			}})
			.then(r => state.galleryArray = r.data.data)
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<>
			<Seo
				title="Gallery"
				description="Empower your unstoppable winning streak in our groundbreaking NFT Collection, where GAMEFi meets Play-to-Earn at the ultimate crossroads."
			/>
			<GalleryModalItem/>
			<Wrapper>
				<CenterBlock>
					<Title className="heading"><h1>Gallery</h1></Title>
					<GallerySorting/>
					<GalleryFiltersModal/>
					{
						snap.galleryArray.result ? (
							snap.galleryArray.result.length ? (
								<GalleryCardsList>
									{
										snap.galleryArray.result.map(item => {
											return <GalleryCardItem item={item} key={item.id}/>
										})
									}
								</GalleryCardsList>
							) : <GalleryNotification>Nothing found. Change filters</GalleryNotification>
						) : <GalleryNotification>Loading</GalleryNotification>
					}
					<Pagination total={snap.galleryArray.totalPages} page={snap.galleryPage} slug="/gallery"/>
				</CenterBlock>
			</Wrapper>
		</>
	)
}

const Wrapper = styled.section`
	margin-top: 160px;
  @media only screen and (max-width: 1024px) {
	  margin-top: 120px;
  }
  @media only screen and (max-width: 600px) {
	  margin-top: 80px;
  }
	.heading{
		text-align: center;
	}
	.pagination{
		margin-top: 80px;
	}
`
