import Seo from "helpers/Seo";
import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import GalleryCardsList from "components/Gallery/GalleryCardsList";
import GalleryNotification from "components/Gallery/GalleryNotification";
import {useSnapshot} from "valtio";
import {state} from "state";
import axios from "axios";
import ProfileSorting from "components/Profile/ProfileSorting";
import ProfileModalItem from "components/Profile/ProfileModalItem";
import {useEffect, useState} from "react";
import {useAccount, useReadContract} from "wagmi";
import {getABIContract} from "utils/functions";
import Pagination from "components/Pagination";
import ProfileCardItem from "components/Profile/ProfileCardItem";
import {useRouter} from "next/router";

export default function Profile(){
	const snap = useSnapshot(state)
	const {push, query} = useRouter()
	const [array, setArray] = useState<number[]>([])
	const {address, isConnected} = useAccount()
	
	useEffect(() => {
		push("/profile?page=1").then(() => makeRequest(1))
	}, [snap.profileFilters, snap.profileSorting]);
	
	const {data} = useReadContract({
		abi: getABIContract(),
		address: process.env.CONTRACT as any,
		functionName: 'totalOfOwner',
		args: [address],
		query: {
			enabled: !Boolean(array.length)
		}
	})
	
	useEffect(() => {
		state.profilePage = query.page ? Number(query.page) : 1
	}, [query.page])
	
	useEffect(() => {
		if (array.length) makeRequest(Number(snap.profilePage))
	}, [snap.profilePage])
	
	if (data && array.length === 0) {
		if (data as bigint[]) {
			const array = [] as number[]
			(data as bigint[]).map((item: bigint) => {
				array.push(Number(item))
			})
			setArray(array)
		}
	}
	
	useEffect(() => {
		if (array.length) makeRequest(1)
	}, [array]);


	const makeRequest = (page: number) => {
		axios.get("/api/gallery", {
			params: {
				page,
				limit: 12,
				filter: JSON.stringify(snap.profileFilters),
				sorting: JSON.stringify(snap.profileSorting),
				array: JSON.stringify(array)
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
					<ProfileSorting tokensArray={array}/>
					{
						snap.profileArray.result ? (
							snap.profileArray.result.length ? (
								<GalleryCardsList>
									{
										snap.profileArray.result.map(item => {
											return <ProfileCardItem item={item} key={item.id}/>
										})
									}
								</GalleryCardsList>
							) : <GalleryNotification>Nothing found. Change filters</GalleryNotification>
						) : <GalleryNotification>Loading</GalleryNotification>
					}
					<Pagination total={snap.profileArray.totalPages} page={snap.profilePage} slug="/profile"/>
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
