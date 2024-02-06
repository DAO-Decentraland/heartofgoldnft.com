import Seo from "helpers/Seo";
import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import GalleryCardsList from "components/Gallery/GalleryCardsList";
import GalleryCardItem from "components/Gallery/GalleryCardItem";
import GalleryNotification from "components/Gallery/GalleryNotification";
import {useSnapshot} from "valtio";
import {state} from "state";
import axios from "axios";
import ProfileSorting from "components/Profile/ProfileSorting";
import ProfileModalItem from "components/Profile/ProfileModalItem";

export default function Profile(){
	const snap = useSnapshot(state)


	const makeRequest = (page: number) => {
		axios.get("/api/gallery", {
			params: {
				page,
				limit: 12,
				filter: JSON.stringify(snap.profileFilters),
				sorting: JSON.stringify(snap.profileSorting)
			}})
			.then(r => state.profileArray = r.data.data)
			.catch(error => {
				console.log(error)
			})
	}

	return (
		<>
			<Seo
				title="Profile"
				description="Empower your unstoppable winning streak in our groundbreaking NFT Collection, where GAMEFi meets Play-to-Earn at the ultimate crossroads."
				image="/pic/og.jpg"
			/>
			<ProfileModalItem/>
			<Wrapper>
				<CenterBlock>
					<Title className="heading"><h1>Profile</h1></Title>
					<ProfileSorting/>
					{
						snap.profileArray.result ? (
							snap.profileArray.result.length ? (
								<GalleryCardsList>
									{
										snap.profileArray.result.map(item => {
											return <GalleryCardItem item={item} key={item.id}/>
										})
									}
								</GalleryCardsList>
							) : <GalleryNotification>Nothing found. Change filters</GalleryNotification>
						) : <GalleryNotification>Loading</GalleryNotification>
					}
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
